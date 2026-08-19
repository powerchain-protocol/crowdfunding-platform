import { getSolanaProviderStatus, normalizeSolanaCluster, resolveSolanaRpcConfig } from "@powerchain/config/solana";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const requested = new URL(request.url).searchParams.get("network") ?? undefined;
  const network = normalizeSolanaCluster(requested);
  const env = { ...process.env, SOLANA_CLUSTER: network };
  const status = getSolanaProviderStatus(env);
  const resolved = resolveSolanaRpcConfig(env);
  const started = Date.now();
  let reachable = false;
  try {
    const response = await fetch(resolved.rpcUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getHealth" }),
      cache: "no-store",
      signal: AbortSignal.timeout(5_000),
    });
    reachable = response.ok;
  } catch { reachable = false; }
  return Response.json({ data: { ...status, reachable, latencyMs: Date.now() - started }, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
}
