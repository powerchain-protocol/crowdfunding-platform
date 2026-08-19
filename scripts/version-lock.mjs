import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const canonical = "1.0.0";
const errors = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (["node_modules", ".next", ".git", ".turbo"].includes(name)) continue;
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    else if (name === "package.json") {
      const data = JSON.parse(readFileSync(path, "utf8"));
      if (data.version && data.version !== canonical) {
        errors.push(`${relative(root, path)} has version ${data.version}`);
      }
    }
  }
}

walk(root);
if (errors.length) {
  console.error(`PowerChain version lock failed. Canonical version is ${canonical}:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`PowerChain canonical version lock OK: ${canonical}`);
