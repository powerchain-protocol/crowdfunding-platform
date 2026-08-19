import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const apps = ["web", "crowdfunding", "donate", "checkout", "dashboard", "treasury", "admin", "explorer", "docs", "pwa", "api"];
const failures = [];

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
}

function requireFile(file) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`Missing ${file}`);
}

for (const file of ["components.json", "packages/ui/components.json", "packages/ui/src/lib/utils.ts", "packages/ui/src/hooks/index.ts", "packages/ui/src/components/index.ts"]) {
  requireFile(file);
}

const rootConfig = readJson("components.json");
const rootTs = readJson("tsconfig.json");
const rootPaths = rootTs.compilerOptions?.paths ?? {};
const expectedRootAliases = {
  components: "@powerchain/ui/components",
  ui: "@powerchain/ui/components",
  lib: "@powerchain/ui/lib",
  hooks: "@powerchain/ui/hooks",
  utils: "@powerchain/ui/lib/utils",
};
for (const [key, value] of Object.entries(expectedRootAliases)) {
  if (rootConfig.aliases?.[key] !== value) failures.push(`Root components.json alias ${key} must be ${value}`);
}
for (const alias of ["@powerchain/ui", "@powerchain/ui/*"]) {
  if (!rootPaths[alias]) failures.push(`Root tsconfig.json is missing compilerOptions.paths[${alias}]`);
}

const uiPkg = readJson("packages/ui/package.json");
for (const exp of ["./components", "./components/*", "./lib", "./lib/*", "./hooks", "./hooks/*"]) {
  if (!uiPkg.exports?.[exp]) failures.push(`@powerchain/ui package export missing ${exp}`);
}
for (const imp of ["#components/*", "#lib/*", "#hooks/*"]) {
  if (!uiPkg.imports?.[imp]) failures.push(`@powerchain/ui package import missing ${imp}`);
}

for (const app of apps) {
  const base = `apps/${app}`;
  requireFile(`${base}/components.json`);
  requireFile(`${base}/tsconfig.json`);
  const cfg = readJson(`${base}/components.json`);
  const ts = readJson(`${base}/tsconfig.json`);
  if (cfg.aliases?.hooks !== "@/hooks") failures.push(`${base}/components.json hooks alias must be @/hooks`);
  if (cfg.aliases?.ui !== "@powerchain/ui/components") failures.push(`${base}/components.json ui alias must target @powerchain/ui/components`);
  if (cfg.aliases?.utils !== "@powerchain/ui/lib/utils") failures.push(`${base}/components.json utils alias must target @powerchain/ui/lib/utils`);
  if (ts.compilerOptions?.baseUrl !== ".") failures.push(`${base}/tsconfig.json baseUrl must be .`);
  const local = ts.compilerOptions?.paths?.["@/*"];
  if (!Array.isArray(local) || !local.includes("./*")) failures.push(`${base}/tsconfig.json must map @/* to ./*`);
}

if (failures.length) {
  console.error("shadcn monorepo validation failed:\n" + failures.map((f) => `- ${f}`).join("\n"));
  process.exit(1);
}
console.log(`shadcn monorepo configuration OK: ${apps.length} apps + @powerchain/ui aliases are resolvable.`);
