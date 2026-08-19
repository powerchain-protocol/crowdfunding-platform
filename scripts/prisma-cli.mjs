import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const supported = new Set(["generate", "validate", "format"]);
const command = process.argv[2];
if (!supported.has(command)) {
  console.error(`Usage: node scripts/prisma-cli.mjs <${[...supported].join("|")}>`);
  process.exit(2);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const schema = resolve(root, "prisma/schema.prisma");
const prismaBin = resolve(root, "node_modules/.bin", process.platform === "win32" ? "prisma.cmd" : "prisma");

if (!existsSync(prismaBin)) {
  console.error("Prisma CLI is not installed yet. Run pnpm install first.");
  process.exit(1);
}

const env = { ...process.env };
if (!env.DATABASE_URL) {
  env.DATABASE_URL = "postgresql://powerchain_codegen:powerchain_codegen@127.0.0.1:5432/powerchain_codegen?schema=public";
  console.warn("DATABASE_URL is not set; using a non-connecting local placeholder for Prisma schema tooling only.");
}

const result = spawnSync(prismaBin, [command, "--schema", schema], {
  cwd: root,
  env,
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}
process.exit(result.status ?? 1);
