import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { findEnvFile, loadPowerChainEnv } from "./lib/env.mjs";

const root = process.cwd();
loadPowerChainEnv(root);
const action = process.argv[2] ?? "status";
const composeArgs = {
  up: ["up", "-d"],
  down: ["down"],
  logs: ["logs", "-f"],
  status: ["ps"],
}[action];
if (!composeArgs) {
  console.error("Usage: node scripts/infra-compose.mjs <up|down|logs|status>");
  process.exit(2);
}

function works(command, args) {
  const result = spawnSync(command, args, { cwd: root, stdio: "ignore" });
  return !result.error && result.status === 0;
}

let command;
let prefix;
if (works("docker", ["compose", "version"])) {
  command = "docker";
  prefix = ["compose"];
} else if (works("podman", ["compose", "version"])) {
  command = "podman";
  prefix = ["compose"];
} else {
  console.warn("No Docker Compose or Podman Compose runtime was found.");
  console.warn("Docker is optional for pnpm dev. Configure reachable PostgreSQL/Redis endpoints in .env.local, or install a container runtime before using stack:* commands.");
  console.warn("Run `pnpm infra:check` to validate the configured endpoints, then `pnpm dev` for the application stack.");
  process.exit(action === "status" || action === "down" ? 0 : 2);
}

const envFile = findEnvFile(root);
const args = [...prefix];
if (envFile && existsSync(envFile)) args.push("--env-file", envFile);
args.push("-f", resolve(root, "infra/docker-compose.yml"), ...composeArgs);

const result = spawnSync(command, args, { cwd: root, stdio: "inherit", env: process.env });
if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 1);
