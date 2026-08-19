import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const EXPECTED = "8.5.23";
const problems = [];
const checked = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".turbo", ".git", "dist", "coverage"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === "package.json") {
      const rel = path.relative(root, full);
      let pkg;
      try { pkg = JSON.parse(fs.readFileSync(full, "utf8")); }
      catch { problems.push(`${rel}: invalid JSON`); continue; }
      for (const section of ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"]) {
        const version = pkg?.[section]?.postcss;
        if (version !== undefined) {
          checked.push(`${rel}#${section}`);
          if (version !== EXPECTED) problems.push(`${rel}#${section}.postcss=${version}; expected ${EXPECTED}`);
        }
      }
    }
  }
}
walk(root);

const workspace = fs.readFileSync(path.join(root, "pnpm-workspace.yaml"), "utf8");
if (!new RegExp(`^\\s{2}postcss:\\s+["']?${EXPECTED.replaceAll('.', '\\.')}`, "m").test(workspace)) {
  problems.push(`pnpm-workspace.yaml must override postcss to ${EXPECTED}`);
}

const rootPkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
if (rootPkg.devDependencies?.postcss !== EXPECTED) {
  problems.push(`root devDependencies.postcss must be ${EXPECTED}`);
}

if (problems.length) {
  console.error("PostCSS version validation failed:");
  for (const problem of problems) console.error(`- ${problem}`);
  process.exit(1);
}
console.log(`PostCSS version OK: ${EXPECTED}; ${checked.length} direct manifest declaration(s), workspace override enforced.`);
