import { existsSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const pidFile = resolve(root, ".powerchain-dev.pid");
const removeDependencies = process.argv.includes("--deps");

if (existsSync(pidFile)) {
  const pid = Number(readFileSync(pidFile, "utf8").trim());
  if (Number.isInteger(pid) && pid > 0) {
    try {
      process.kill(pid, 0);
      console.error(`Refusing to clean while pnpm dev is active (PID ${pid}). Stop the dev supervisor first.`);
      process.exit(2);
    } catch {
      // Stale PID file; remove it and continue.
    }
  }
  rmSync(pidFile, { force: true });
}

const apps = ["web","crowdfunding","donate","checkout","dashboard","treasury","admin","explorer","docs","pwa","api"];
const generatedTargets = [
  resolve(root, ".turbo"),
  ...apps.map((app) => resolve(root, "apps", app, ".next")),
];
for (const target of generatedTargets) rmSync(target, { recursive: true, force: true });

if (removeDependencies) {
  rmSync(resolve(root, "node_modules"), { recursive: true, force: true });
  for (const area of ["apps", "packages", "services", "skills"]) {
    const parent = resolve(root, area);
    if (!existsSync(parent)) continue;
    for (const entry of readdirSync(parent, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      rmSync(resolve(parent, entry.name, "node_modules"), { recursive: true, force: true });
    }
  }
}

console.log(`Cleaned generated Next.js/Turborepo output${removeDependencies ? " and workspace dependencies" : ""}.`);
console.log("Source directories were not touched.");
