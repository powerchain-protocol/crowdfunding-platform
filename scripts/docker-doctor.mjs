import { spawnSync } from "node:child_process";
import process from "node:process";

function works(command, args) {
  const result = spawnSync(command, args, { stdio: "ignore" });
  return !result.error && result.status === 0;
}

if (works("docker", ["compose", "version"])) {
  const version = spawnSync("docker", ["compose", "version"], { encoding: "utf8" });
  console.log(`Docker Compose available: ${(version.stdout || version.stderr).trim()}`);
  process.exit(0);
}

if (works("podman", ["compose", "version"])) {
  const version = spawnSync("podman", ["compose", "version"], { encoding: "utf8" });
  console.log(`Podman Compose available: ${(version.stdout || version.stderr).trim()}`);
  process.exit(0);
}

console.error("No Docker Compose or Podman Compose runtime is installed or available on PATH.");
console.error("Repository Docker support is present, but the container runtime itself must be installed on the host.");
if (process.platform === "darwin") {
  console.error("macOS: install Docker Desktop (or Podman Desktop), launch it once, then rerun `pnpm docker:check`.");
} else if (process.platform === "linux") {
  console.error("Linux: install Docker Engine + Compose plugin, or Podman + Podman Compose, then rerun this check.");
}
console.error("You can still use `pnpm dev` without containers when POWERCHAIN_DATA_MODE=mock and POWERCHAIN_WRITE_MODE=simulated.");
process.exit(2);
