import { loadPowerChainEnv } from "./lib/env.mjs";

const loaded = loadPowerChainEnv(process.cwd());
const required = ["DATABASE_URL"];
const optional = ["REDIS_URL", "QUEUE_URL", "SOLANA_RPC_URL", "SUI_RPC_URL", "EVM_RPC_URL"];
const missing = required.filter((name) => !process.env[name]);
if (missing.length) {
  console.error(`Infrastructure config missing: ${missing.join(", ")}. Run pnpm env:init or export the variables.`);
  process.exit(1);
}
console.log(`Infrastructure config OK${loaded ? ` (${loaded})` : ""}.`);
console.log(`Optional configured: ${optional.filter((name) => Boolean(process.env[name])).join(", ") || "none"}.`);
console.log("Container runtime is optional; pnpm stack:up uses Docker Compose or Podman Compose when available.");
