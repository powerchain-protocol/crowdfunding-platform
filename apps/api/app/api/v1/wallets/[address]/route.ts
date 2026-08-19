import { normalizeSolanaCluster } from "@powerchain/config/solana";
import { getWalletData } from "../../../../../lib/solana-rpc";

export const dynamic = "force-dynamic";

export async function GET(request: Request, context: { params: Promise<{ address: string }> }) {
  const { address } = await context.params;
  const network = normalizeSolanaCluster(new URL(request.url).searchParams.get("network") ?? undefined);
  try {
    const data = await getWalletData(address, network);
    return Response.json({ data, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "public, max-age=5, stale-while-revalidate=10" } });
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : "Wallet data unavailable.";
    const invalid = message === "INVALID_SOLANA_ADDRESS";
    return Response.json({ error: { code: invalid ? "INVALID_WALLET" : "RPC_UNAVAILABLE", message: invalid ? "Invalid Solana wallet address." : "Wallet data could not be read from the selected Solana network.", requestId: crypto.randomUUID() } }, { status: invalid ? 400 : 503 });
  }
}
