import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");

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
runNode("scripts/prisma-cli.mjs", ["generate"]);
