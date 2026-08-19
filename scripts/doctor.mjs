import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const expectedNode = "24.19.0";
const expectedPnpm = "11.22.0";
const actualNode = process.versions.node;
const root = resolve(new URL("..", import.meta.url).pathname);
const manifest = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
const problems = [];
const warnings = [];

if (actualNode !== expectedNode) problems.push(`Node v${actualNode}; expected v${expectedNode}`);
if (manifest.packageManager !== `pnpm@${expectedPnpm}`) problems.push(`packageManager=${manifest.packageManager}; expected pnpm@${expectedPnpm}`);
if (manifest.engines?.pnpm !== expectedPnpm) problems.push(`engines.pnpm=${manifest.engines?.pnpm}; expected ${expectedPnpm}`);

const requiredRootFiles = [".env.example", ".dockerignore", ".npmignore", ".npmrc", ".nvmrc", ".node-version"];
const missingRootFiles = requiredRootFiles.filter((file) => !existsSync(resolve(root, file)));
if (missingRootFiles.length) {
  problems.push(`missing repository root files: ${missingRootFiles.join(", ")}; run pnpm repair:repository`);
}

if (!existsSync(resolve(root, ".env.local"))) {
  warnings.push(".env.local is not present; run pnpm env:init before enabling database/provider-backed flows");
}
if (!existsSync(resolve(root, "pnpm-lock.yaml"))) {
  warnings.push("pnpm-lock.yaml is not present; pnpm install will create a fresh lockfile using the active supply-chain policy");
}

if (problems.length) {
  console.error(`PowerChain doctor failed:\n- ${problems.join("\n- ")}`);
  process.exit(1);
}

console.log(`Runtime metadata OK: Node v${actualNode}, pnpm ${expectedPnpm}, canonical repository templates present.`);
for (const warning of warnings) console.warn(`Warning: ${warning}`);
