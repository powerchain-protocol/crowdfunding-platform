import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const required = [
  "config/typescript/base.json",
  "config/typescript/nextjs.json",
  "config/typescript/library.json",
  "config/typescript/node-library.json",
  "config/typescript/react-library.json",
  "config/typescript/react-node-library.json",
  "config/next/shared.mjs",
  "config/security/headers.ts",
  "config/runtime/versions.json",
];

const problems = required.filter((file) => !existsSync(path.join(root, file))).map((file) => `Missing ${file}`);
for (const app of ["web","crowdfunding","donate","checkout","dashboard","treasury","admin","explorer","docs","pwa","api"]) {
  const appDir = path.join(root, "apps", app);
  if (!existsSync(path.join(appDir, "next.config.mjs"))) problems.push(`apps/${app}/next.config.mjs missing`);
  if (existsSync(path.join(appDir, "next.config.ts"))) problems.push(`apps/${app} contains duplicate next.config.ts`);
  const tsconfigPath = path.join(appDir, "tsconfig.json");
  if (!existsSync(tsconfigPath)) problems.push(`apps/${app}/tsconfig.json missing`);
  else {
    const config = JSON.parse(readFileSync(tsconfigPath, "utf8"));
    if (config.extends !== "../../config/typescript/nextjs.json") problems.push(`apps/${app}/tsconfig.json does not extend canonical Next config`);
  }
}

if (problems.length) {
  console.error(`Configuration validation failed:\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("Configuration OK: canonical TypeScript, Next.js and Proxy config boundaries are present.");
