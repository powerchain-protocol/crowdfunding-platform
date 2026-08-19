import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { POWERCHAIN_APPS } from "../config/workspace/apps.mjs";

const root = resolve(new URL("..", import.meta.url).pathname);
const errors = [];

for (const app of POWERCHAIN_APPS) {
  const appRoot = resolve(root, "apps", app.dir);
  const required = ["package.json", "app", "next.config.mjs", "tsconfig.json", "next-env.d.ts"];
  for (const entry of required) {
    const target = resolve(appRoot, entry);
    if (!existsSync(target)) errors.push(`apps/${app.dir}/${entry} is missing`);
    else if (entry === "app" && !statSync(target).isDirectory()) errors.push(`apps/${app.dir}/app is not a directory`);
  }
}

for (const target of ["package.json", "pnpm-workspace.yaml", "config/next/shared.mjs", "config/workspace/apps.mjs", "prisma/schema.prisma"]) {
  if (!existsSync(resolve(root, target))) errors.push(`${target} is missing`);
}

if (errors.length) {
  console.error(`Source tree validation failed:\n- ${errors.join("\n- ")}`);
  console.error("Run pnpm repair:workspace for generated config files. Missing app source must be restored from Git or the canonical archive.");
  process.exit(1);
}
console.log(`Source tree OK: ${POWERCHAIN_APPS.length} Next.js applications are complete.`);
