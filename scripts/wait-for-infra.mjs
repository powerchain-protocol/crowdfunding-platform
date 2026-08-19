import { createConnection } from "node:net";
import { loadPowerChainEnv } from "./lib/env.mjs";

loadPowerChainEnv(process.cwd());

function fromUrl(name, value, fallbackHost, fallbackPort) {
  if (!value) return { name, host: fallbackHost, port: fallbackPort };
  try {
    const url = new URL(value);
    return { name, host: url.hostname || fallbackHost, port: Number(url.port || fallbackPort) };
  } catch {
    return { name, host: fallbackHost, port: fallbackPort };
  }
}

const targets = [
  fromUrl("postgres", process.env.DATABASE_URL, process.env.POSTGRES_HOST ?? "127.0.0.1", Number(process.env.POSTGRES_PORT ?? 5432)),
  fromUrl("redis", process.env.REDIS_URL, process.env.REDIS_HOST ?? "127.0.0.1", Number(process.env.REDIS_PORT ?? 6379)),
];
const waitMs = Number(process.env.POWERCHAIN_INFRA_WAIT_MS ?? 30000);
const deadline = Date.now() + waitMs;

function connect({ host, port }) {
  return new Promise((resolve, reject) => {
    const socket = createConnection({ host, port });
    socket.setTimeout(750);
    socket.once("connect", () => { socket.end(); resolve(); });
    socket.once("timeout", () => socket.destroy(new Error("timeout")));
    socket.once("error", reject);
  });
}

for (const target of targets) {
  let firstFailure = true;
  while (true) {
    try {
      await connect(target);
      console.log(`✓ ${target.name} reachable at ${target.host}:${target.port}`);
      break;
    } catch (error) {
      if (firstFailure) {
        console.log(`… waiting for ${target.name} at ${target.host}:${target.port}`);
        firstFailure = false;
      }
      if (Date.now() >= deadline) {
        console.error(`✗ ${target.name} did not become reachable within ${waitMs}ms: ${error instanceof Error ? error.message : error}`);
        console.error("Docker is not required. Start PostgreSQL/Redis locally or configure DATABASE_URL and REDIS_URL to reachable managed services.");
        process.exit(1);
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
}
console.log("Infrastructure readiness check passed.");
