import { existsSync, rmSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { POWERCHAIN_APPS } from "../config/workspace/apps.mjs";

const root = resolve(new URL("..", import.meta.url).pathname);
const isWindows = process.platform === "win32";
const pnpm = isWindows ? "pnpm.cmd" : "pnpm";
const pidFile = resolve(root, ".powerchain-dev.pid");
writeFileSync(pidFile, `${process.pid}\n`, "utf8");

const watched = POWERCHAIN_APPS.flatMap((app) => [
  resolve(root, "apps", app.dir),
  resolve(root, "apps", app.dir, "app"),
  resolve(root, "apps", app.dir, "package.json"),
  resolve(root, "apps", app.dir, "next.config.mjs"),
  resolve(root, "apps", app.dir, "tsconfig.json"),
]);
watched.push(resolve(root, "node_modules"));

const filters = POWERCHAIN_APPS.flatMap((app) => ["--filter", app.packageName]);
const child = spawn(pnpm, ["--recursive", "--parallel", ...filters, "run", "dev"], {
  cwd: root,
  env: { ...process.env, POWERCHAIN_DEV_SUPERVISOR: "1" },
  stdio: "inherit",
  detached: !isWindows,
});

let stopping = false;
function stop(signal = "SIGTERM") {
  if (stopping) return;
  stopping = true;
  rmSync(pidFile, { force: true });
  if (!isWindows && child.pid) {
    try {
      process.kill(-child.pid, signal);
      return;
    } catch {}
  }
  child.kill(signal);
}

const timer = setInterval(() => {
  const missing = watched.filter((entry) => !existsSync(entry));
  if (!missing.length) return;

  console.error("\nPowerChain dev supervisor detected live source/config removal:");
  for (const entry of missing) console.error(`- missing ${entry.replace(root + "/", "")}`);
  console.error("Stopping all dev servers before Next.js/Turbopack enters an invalid cwd or deleted .next loop.");
  clearInterval(timer);
  stop("SIGTERM");
}, 1000);

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    clearInterval(timer);
    stop(signal);
  });
}

child.on("exit", (code, signal) => {
  clearInterval(timer);
  rmSync(pidFile, { force: true });
  if (signal) process.exit(1);
  process.exit(code ?? 1);
});
child.on("error", (error) => {
  clearInterval(timer);
  rmSync(pidFile, { force: true });
  console.error(`Unable to start workspace apps: ${error.message}`);
  process.exit(1);
});
