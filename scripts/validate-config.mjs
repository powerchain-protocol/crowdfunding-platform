import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { POWERCHAIN_APPS } from "../config/workspace/apps.mjs";

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
  "config/workspace/apps.mjs",
  ".env.example",
  "env/README.md",
  "env/development.env.example",
  "env/test.env.example",
  "env/production.env.example",
  "env/docker.env.example",
  "env/solana.env.example",
  "env/supabase.env.example",
  "Dockerfile",
  ".dockerignore",
  ".npmignore",
  "infra/Dockerfile.dev",
  "infra/docker-compose.yml",
];

const problems = required.filter((file) => !existsSync(path.join(root, file))).map((file) => `Missing ${file}`);
for (const app of POWERCHAIN_APPS) {
  const appDir = path.join(root, "apps", app.dir);
  if (!existsSync(path.join(appDir, "app"))) problems.push(`apps/${app.dir}/app missing`);
  if (!existsSync(path.join(appDir, "next.config.mjs"))) problems.push(`apps/${app.dir}/next.config.mjs missing`);
  if (existsSync(path.join(appDir, "next.config.ts"))) problems.push(`apps/${app.dir} contains duplicate next.config.ts`);
  const tsconfigPath = path.join(appDir, "tsconfig.json");
  if (!existsSync(tsconfigPath)) problems.push(`apps/${app.dir}/tsconfig.json missing`);
  else {
    const config = JSON.parse(readFileSync(tsconfigPath, "utf8"));
    if (config.extends !== "../../config/typescript/nextjs.json") problems.push(`apps/${app.dir}/tsconfig.json does not extend canonical Next config`);
  }
}

if (problems.length) {
  console.error(`Configuration validation failed:\n- ${problems.join("\n- ")}`);
  console.error("Run pnpm repair:workspace. If app source is missing, restore the repository before running dev.");
  process.exit(1);
}
console.log("Configuration OK: canonical TypeScript, Next.js, environment and workspace boundaries are present.");
