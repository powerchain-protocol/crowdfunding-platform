import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const workspaceYaml = readFileSync(join(root, "pnpm-workspace.yaml"), "utf8");
const patterns = [...workspaceYaml.matchAll(/^\s*-\s+["']?([^"'\n]+)["']?\s*$/gm)].map((match) => match[1]);

function directPackageJsons(baseDir) {
  const result = [];
  for (const entry of readdirSync(baseDir)) {
    const path = join(baseDir, entry);
    if (!statSync(path).isDirectory()) continue;
    const manifest = join(path, "package.json");
    try { readFileSync(manifest); result.push(manifest); } catch {}
  }
  return result;
}

const packageJsonFiles = [join(root, "package.json")];
for (const pattern of patterns) {
  if (!pattern.endsWith("/*")) {
    const manifest = join(root, pattern, "package.json");
    try { readFileSync(manifest); packageJsonFiles.push(manifest); } catch {}
    continue;
  }
  const base = join(root, pattern.slice(0, -2));
  packageJsonFiles.push(...directPackageJsons(base));
}

const packages = new Map();
for (const file of packageJsonFiles) {
  const manifest = JSON.parse(readFileSync(file, "utf8"));
  if (!manifest.name) continue;
  if (packages.has(manifest.name)) {
    throw new Error(`Duplicate workspace package name ${manifest.name}: ${packages.get(manifest.name)} and ${relative(root, file)}`);
  }
  packages.set(manifest.name, relative(root, file));
}

const issues = [];
const dependencyFields = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];
for (const [, relFile] of packages) {
  const manifest = JSON.parse(readFileSync(join(root, relFile), "utf8"));
  for (const field of dependencyFields) {
    for (const [dependencyName, specifier] of Object.entries(manifest[field] ?? {})) {
      if (typeof specifier !== "string" || !specifier.startsWith("workspace:")) continue;
      if (!packages.has(dependencyName)) {
        issues.push(`${relFile}: ${field}.${dependencyName}=${specifier} does not match any workspace package name`);
      }
    }
  }
}

if (issues.length) {
  console.error("Workspace dependency validation failed:\n- " + issues.join("\n- "));
  process.exit(1);
}

console.log(`Workspace dependency validation passed: ${packages.size} workspace projects, all workspace:* references resolve.`);
