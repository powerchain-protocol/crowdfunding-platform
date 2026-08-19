import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const uiPackagePath = join(root, "packages/ui/package.json");
const uiPackage = JSON.parse(readFileSync(uiPackagePath, "utf8"));
const expectedVersion = "4.1.20";
const actualVersion = uiPackage.dependencies?.["@web3icons/react"];
const failures = [];

if (actualVersion !== expectedVersion) {
  failures.push(`@powerchain/ui must pin @web3icons/react to ${expectedVersion}; found ${String(actualVersion)}`);
}

if (uiPackage.exports?.["./web3-icons"] !== "./src/web3-icons.tsx") {
  failures.push("@powerchain/ui must export ./web3-icons from ./src/web3-icons.tsx");
}

const wrapperPath = join(root, "packages/ui/src/web3-icons.tsx");
const wrapper = readFileSync(wrapperPath, "utf8");
if (!wrapper.startsWith('"use client"')) failures.push("web3-icons.tsx must remain an explicit client boundary");
if (!wrapper.includes('@web3icons/react/dynamic')) failures.push("web3-icons.tsx must import the documented dynamic entry point");

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (["node_modules", ".next", ".turbo", ".git"].includes(name)) continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) walk(path);
    else if (/\.(ts|tsx|js|mjs)$/.test(name)) {
      const text = readFileSync(path, "utf8");
      if (text.includes("@web3icons/react") && !path.includes(join("packages", "ui"))) {
        failures.push(`${relative(root, path)} imports @web3icons/react directly; use @powerchain/ui/web3-icons instead`);
      }
    }
  }
}
walk(join(root, "apps"));
walk(join(root, "packages"));

if (failures.length) {
  console.error("Web3 Icons validation failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`Web3 Icons OK: @web3icons/react ${expectedVersion}, centralized behind @powerchain/ui/web3-icons.`);
