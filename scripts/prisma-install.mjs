import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { loadPowerChainEnv } from "./lib/env.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
loadPowerChainEnv(root);

function runNode(script, args = []) {
  const result = spawnSync(process.execPath, [resolve(root, script), ...args], {
    cwd: root,
    env: process.env,
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

runNode("scripts/validate-prisma-schema.mjs");

const rootClient = resolve(root, "node_modules/@prisma/client/package.json");
if (!existsSync(rootClient)) {
  console.error("Prisma install precondition failed: root node_modules/@prisma/client is missing.");
  console.error("@prisma/client@6.19.3 is declared at the root specifically so Prisma generate never invokes a nested package-manager install.");
  process.exit(1);
}

runNode("scripts/prisma-cli.mjs", ["generate"]);
