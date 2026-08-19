import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const required = [
  "README.md",
  "apps/README.md",
  "apps/api/README.md",
  "packages/README.md",
  "services/README.md",
  "skills/README.md",
  "modals/README.md",
  "env/README.md",
  "infra/README.md",
  "config/README.md",
  "docs/README.md",
  "programs/README.md",
  "programs/solana/README.md",
];
const missing = required.filter((file) => !existsSync(join(root, file)));
if (missing.length) {
  console.error(`README validation failed. Missing: ${missing.join(", ")}`);
  process.exit(1);
}

const rootReadme = readFileSync(join(root, "README.md"), "utf8");
const pnpmReadme = readFileSync(join(root, "docs/PNPM.md"), "utf8");
for (const [file, text] of [["README.md", rootReadme], ["docs/PNPM.md", pnpmReadme]]) {
  if (!text.includes("24.19.0")) {
    console.error(`${file} must document Node 24.19.0.`);
    process.exit(1);
  }
  if (!text.includes("11.22.0")) {
    console.error(`${file} must document pnpm 11.22.0.`);
    process.exit(1);
  }
}
if (!existsSync(join(root, ".env.example")) || !existsSync(join(root, "env/development.env.example"))) {
  console.error("Environment templates are incomplete; both .env.example and env/development.env.example are required.");
  process.exit(1);
}
console.log(`README validation passed: ${required.length} required README files, canonical runtime documentation present.`);
