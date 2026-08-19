import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { POWERCHAIN_APPS } from "../config/workspace/apps.mjs";

const root = resolve(new URL("..", import.meta.url).pathname);
console.log("PowerChain application inventory:");
for (const app of POWERCHAIN_APPS) {
  const manifestPath = resolve(root, "apps", app.dir, "package.json");
  const state = existsSync(manifestPath) ? "ok" : "missing";
  let name = app.packageName;
  if (state === "ok") {
    try { name = JSON.parse(readFileSync(manifestPath, "utf8")).name ?? name; } catch {}
  }
  console.log(`- ${app.dir.padEnd(12)} ${String(app.port).padEnd(5)} ${name.padEnd(30)} ${state}`);
}
