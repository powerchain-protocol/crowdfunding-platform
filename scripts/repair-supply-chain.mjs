import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const lockfile = resolve(root, "pnpm-lock.yaml");
const manifestPath = resolve(root, "package.json");
const workspacePath = resolve(root, "pnpm-workspace.yaml");
const removeDeps = process.argv.includes("--deps");
const expectedTurbo = "2.10.10";

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
let changed = false;
if (manifest.devDependencies?.turbo !== expectedTurbo) {
  manifest.devDependencies ??= {};
  manifest.devDependencies.turbo = expectedTurbo;
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  changed = true;
}

let workspace = readFileSync(workspacePath, "utf8");
if (/turbo:\s*["']?2\.10\.11["']?/.test(workspace)) {
  workspace = workspace.replace(/turbo:\s*["']?2\.10\.11["']?/, `turbo: "${expectedTurbo}"`);
  writeFileSync(workspacePath, workspace);
  changed = true;
}

if (existsSync(lockfile)) {
  rmSync(lockfile, { force: true });
  console.log("Removed pnpm-lock.yaml so pnpm can resolve the mature pinned dependency graph.");
} else {
  console.log("No pnpm-lock.yaml present; nothing to remove.");
}

if (removeDeps) {
  rmSync(resolve(root, "node_modules"), { recursive: true, force: true });
  console.log("Removed root node_modules (--deps requested).");
}

console.log(changed ? `Pinned Turborepo to ${expectedTurbo}.` : `Turborepo already pinned to ${expectedTurbo}.`);
console.log("Next: corepack prepare pnpm@11.22.0 --activate && pnpm install");
