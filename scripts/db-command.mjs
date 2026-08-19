import { createConnection } from "node:net";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { loadPowerChainEnv } from "./lib/env.mjs";

const root = resolve(new URL("..", import.meta.url).pathname);
loadPowerChainEnv(root);
const action = process.argv[2];
const commands = {
  push: ["prisma", ["db", "push", "--schema", "prisma/schema.prisma"]],
  "migrate-dev": ["prisma", ["migrate", "dev", "--schema", "prisma/schema.prisma"]],
  "migrate-deploy": ["prisma", ["migrate", "deploy", "--schema", "prisma/schema.prisma"]],
  "migrate-status": ["prisma", ["migrate", "status", "--schema", "prisma/schema.prisma"]],
  seed: ["tsx", ["prisma/seed.ts"]],
};
if (!commands[action]) {
  console.error("Usage: node scripts/db-command.mjs <push|migrate-dev|migrate-deploy|migrate-status|seed>");
  process.exit(2);
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is not configured. Run pnpm env:init, then configure .env.local before database writes.");
  process.exit(2);
}
let url;
try { url = new URL(databaseUrl); } catch {
  console.error("DATABASE_URL is invalid.");
  process.exit(2);
}
const host = url.hostname;
const port = Number(url.port || 5432);

await new Promise((resolvePromise, rejectPromise) => {
  const socket = createConnection({ host, port });
  const timeout = setTimeout(() => socket.destroy(new Error("connection timeout")), 2000);
  socket.once("connect", () => { clearTimeout(timeout); socket.end(); resolvePromise(); });
  socket.once("error", (error) => { clearTimeout(timeout); rejectPromise(error); });
}).catch((error) => {
  console.error(`PostgreSQL is not reachable at ${host}:${port}: ${error instanceof Error ? error.message : error}`);
  console.error("Start PostgreSQL (Docker/Podman/native) or point DATABASE_URL at a reachable managed database.");
  process.exit(2);
});

const [binary, args] = commands[action];
const executable = resolve(root, "node_modules/.bin", process.platform === "win32" ? `${binary}.cmd` : binary);
if (!existsSync(executable)) {
  console.error(`${binary} is not installed. Run pnpm install first.`);
  process.exit(1);
}
const child = spawn(executable, args, { cwd: root, env: process.env, stdio: "inherit", shell: process.platform === "win32" });
child.on("exit", (code) => process.exit(code ?? 1));
child.on("error", (error) => { console.error(error.message); process.exit(1); });
