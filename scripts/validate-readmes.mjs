import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

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
  "docs/GETTING-STARTED.md",
  "docs/TROUBLESHOOTING.md",
  "docs/PNPM.md",
  "programs/README.md",
  "programs/solana/README.md",
];

const missing = required.filter((file) => !existsSync(join(root, file)));
if (missing.length) {
  console.error(`README validation failed. Missing: ${missing.join(", ")}`);
  process.exit(1);
}

function walkMarkdown(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    if (["node_modules", ".next", ".turbo", ".git"].includes(name)) continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) files.push(...walkMarkdown(path));
    else if (name.toLowerCase().endsWith(".md")) files.push(path);
  }
  return files;
}

const markdown = walkMarkdown(root);
const stale = [];
for (const file of markdown) {
  const text = readFileSync(file, "utf8");
  if (text.includes("pnpm@11.21.0") || text.includes("pnpm 11.21.0")) {
    stale.push(`${relative(root, file)} references obsolete pnpm 11.21.0`);
  }
}

const rootReadme = readFileSync(join(root, "README.md"), "utf8");
const pnpmReadme = readFileSync(join(root, "docs/PNPM.md"), "utf8");
for (const [file, text] of [["README.md", rootReadme], ["docs/PNPM.md", pnpmReadme]]) {
  if (!text.includes("24.19.0")) stale.push(`${file} must document Node 24.19.0`);
  if (!text.includes("11.22.0")) stale.push(`${file} must document pnpm 11.22.0`);
}
if (!rootReadme.includes("pnpm setup:repair")) stale.push("README.md must document the repair-first bootstrap path");

for (const file of [".env.example", ".dockerignore", ".npmignore", "env/development.env.example"]) {
  if (!existsSync(join(root, file))) stale.push(`required repository/environment file missing: ${file}`);
}

if (stale.length) {
  console.error(`README validation failed:\n- ${stale.join("\n- ")}`);
  process.exit(1);
}

console.log(`README validation passed: ${required.length} required guides, ${markdown.length} Markdown files scanned, canonical runtime/setup documentation present.`);
