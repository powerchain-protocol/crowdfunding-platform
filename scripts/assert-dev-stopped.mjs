import { existsSync, readFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const pidFile = resolve(root, ".powerchain-dev.pid");
const purpose = process.argv[2] ?? "mutate the workspace";

if (!existsSync(pidFile)) process.exit(0);

const raw = readFileSync(pidFile, "utf8").trim();
const pid = Number(raw);
if (!Number.isInteger(pid) || pid <= 0) {
  rmSync(pidFile, { force: true });
  process.exit(0);
}

try {
  process.kill(pid, 0);
  console.error(`PowerChain dev is running (PID ${pid}). Stop it before ${purpose}.`);
  console.error("Concurrent installs/builds can reorganize node_modules or .next while Next.js is running.");
  process.exit(2);
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "EPERM") {
    console.error(`PowerChain dev PID ${pid} exists but cannot be inspected. Stop it before ${purpose}.`);
    process.exit(2);
  }
  rmSync(pidFile, { force: true });
}
