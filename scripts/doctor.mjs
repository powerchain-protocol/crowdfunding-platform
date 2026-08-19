import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const expectedNode = "24.19.0";
const expectedPnpm = "11.22.0";
const actualNode = process.versions.node;
const root = resolve(new URL("..", import.meta.url).pathname);
const manifest = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
const problems = [];

if (actualNode !== expectedNode) problems.push(`Node v${actualNode}; expected v${expectedNode}`);
if (manifest.packageManager !== `pnpm@${expectedPnpm}`) problems.push(`packageManager=${manifest.packageManager}; expected pnpm@${expectedPnpm}`);
if (manifest.engines?.pnpm !== expectedPnpm) problems.push(`engines.pnpm=${manifest.engines?.pnpm}; expected ${expectedPnpm}`);
if (!existsSync(resolve(root, ".env.example")) && !existsSync(resolve(root, "env/development.env.example"))) {
  problems.push("no development environment template found");
}

if (problems.length) {
  console.error(`PowerChain doctor failed:\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(`Runtime metadata OK: Node v${actualNode}, pnpm ${expectedPnpm}, canonical env template present.`);
