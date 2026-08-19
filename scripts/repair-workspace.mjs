import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { POWERCHAIN_APPS } from "../config/workspace/apps.mjs";

const root = resolve(new URL("..", import.meta.url).pathname);
const repaired = [];
const fatal = [];

const envExample = resolve(root, ".env.example");
const envFallback = resolve(root, "env/development.env.example");
if (!existsSync(envExample) && existsSync(envFallback)) {
  copyFileSync(envFallback, envExample);
  repaired.push(".env.example restored from env/development.env.example");
}

const nextConfig = `import { createPowerChainNextConfig } from "../../config/next/shared.mjs";\n\nexport default createPowerChainNextConfig({ appDir: import.meta.dirname });\n`;
const tsconfig = JSON.stringify({
  extends: "../../config/typescript/nextjs.json",
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".next/dev/types/**/*.ts"],
  exclude: ["node_modules"],
}, null, 2) + "\n";
const nextEnv = `/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n\n// NOTE: This file should not be edited manually.\n`;
const postcss = `export default { plugins: { "@tailwindcss/postcss": {} } };\n`;

for (const app of POWERCHAIN_APPS) {
  const appRoot = resolve(root, "apps", app.dir);
  if (!existsSync(appRoot)) {
    fatal.push(`apps/${app.dir} is missing entirely`);
    continue;
  }
  if (!existsSync(resolve(appRoot, "package.json"))) {
    fatal.push(`apps/${app.dir}/package.json is missing`);
    continue;
  }
  if (!existsSync(resolve(appRoot, "app"))) {
    fatal.push(`apps/${app.dir}/app is missing; restore source from Git or the canonical archive (repair will not invent application source)`);
  }

  const generated = [
    ["next.config.mjs", nextConfig],
    ["tsconfig.json", tsconfig],
    ["next-env.d.ts", nextEnv],
    ["postcss.config.mjs", postcss],
  ];
  for (const [name, contents] of generated) {
    const target = resolve(appRoot, name);
    if (!existsSync(target)) {
      writeFileSync(target, contents, "utf8");
      repaired.push(`apps/${app.dir}/${name}`);
    }
  }
}

if (!existsSync(envExample) && !existsSync(envFallback)) {
  fatal.push("both .env.example and env/development.env.example are missing");
}

if (repaired.length) {
  console.log("Workspace repair created/restored:");
  for (const item of repaired) console.log(`- ${item}`);
} else {
  console.log("Workspace repair: no generated configuration files were missing.");
}

if (fatal.length) {
  console.error(`\nSource restoration is required:\n- ${fatal.join("\n- ")}`);
  console.error("Do not create empty app/ folders as a substitute for the real source. Restore the canonical repository, then rerun pnpm repair:workspace.");
  process.exit(2);
}
