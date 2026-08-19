import { copyFileSync, existsSync } from "node:fs";
import { relative, resolve } from "node:path";
import { repairRepositoryFiles } from "./lib/repository-files.mjs";

const root = process.cwd();
repairRepositoryFiles(root, { log: false });
const candidates = [
  resolve(root, ".env.example"),
  resolve(root, "env/development.env.example"),
];
const source = candidates.find((file) => existsSync(file));
const targetArg = process.argv.find((value) => value.startsWith("--target="));
const target = resolve(root, targetArg ? targetArg.slice("--target=".length) : ".env.local");
const force = process.argv.includes("--force");

if (!source) {
  console.error("No development environment template was found.");
  console.error("Expected either .env.example or env/development.env.example at the repository root.");
  console.error("Verify that you extracted/cloned the complete repository, including dotfiles.");
  process.exit(1);
}

if (existsSync(target) && !force) {
  console.log(`${relative(root, target)} already exists; leaving it unchanged.`);
  process.exit(0);
}

copyFileSync(source, target);
console.log(`Created ${relative(root, target)} from ${relative(root, source)}.`);
if (!existsSync(resolve(root, ".env.example"))) {
  console.warn("Root .env.example is absent; env:init used env/development.env.example as a safe fallback.");
}
console.log("Review provider credentials before enabling non-demo writes.");
