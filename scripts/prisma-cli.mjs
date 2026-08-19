import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { loadPowerChainEnv } from "./lib/env.mjs";

const supported = new Set(["generate", "validate", "format"]);
const command = process.argv[2];
if (!supported.has(command)) {
  console.error(`Usage: node scripts/prisma-cli.mjs <${[...supported].join("|")}>`);
  process.exit(2);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
loadPowerChainEnv(root);
const schema = resolve(root, "prisma/schema.prisma");
const prismaBin = resolve(root, "node_modules/.bin", process.platform === "win32" ? "prisma.cmd" : "prisma");
const prismaClientPackage = resolve(root, "node_modules/@prisma/client/package.json");

if (!existsSync(prismaBin)) {
  console.error("Prisma CLI is not installed yet. Run pnpm install first.");
  process.exit(1);
}
if (command === "generate" && !existsSync(prismaClientPackage)) {
  console.error("@prisma/client is not linked at the workspace root. It must be a direct root dependency before prisma generate runs.");
  console.error("Run pnpm install after updating package.json; do not let Prisma mutate dependencies during postinstall.");
  process.exit(1);
}

const env = { ...process.env };
// Prisma 6 may try to mutate package.json/install @prisma/client when it cannot resolve it.
// In this workspace installation is deterministic: dependencies are declared up front.
env.PRISMA_GENERATE_SKIP_AUTOINSTALL = "1";
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
