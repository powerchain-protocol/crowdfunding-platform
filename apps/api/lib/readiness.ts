import { prisma } from "@powerchain/database";
import { createConnection } from "node:net";

export type DependencyCheck = { name: string; ok: boolean; latencyMs: number; detail?: string };

async function timed(name: string, work: () => Promise<void>): Promise<DependencyCheck> {
  const started = performance.now();
  try {
    await work();
    return { name, ok: true, latencyMs: Math.round(performance.now() - started) };
  } catch (error) {
    return { name, ok: false, latencyMs: Math.round(performance.now() - started), detail: error instanceof Error ? error.message : "unknown error" };
  }
}

function tcp(urlText: string, timeoutMs = 900): Promise<void> {
  const url = new URL(urlText);
  const port = Number(url.port || (url.protocol === "rediss:" ? 6380 : 6379));
  return new Promise((resolve, reject) => {
    const socket = createConnection({ host: url.hostname, port });
    const timer = setTimeout(() => socket.destroy(new Error("timeout")), timeoutMs);
    socket.once("connect", () => { clearTimeout(timer); socket.end(); resolve(); });
    socket.once("error", (error: Error) => { clearTimeout(timer); reject(error); });
  });
}

export async function readinessChecks(): Promise<DependencyCheck[]> {
  const checks = [timed("postgres", async () => { await prisma.$queryRaw`SELECT 1`; })];
  if (process.env.REDIS_URL) checks.push(timed("redis", () => tcp(process.env.REDIS_URL!)));
  return Promise.all(checks);
}
