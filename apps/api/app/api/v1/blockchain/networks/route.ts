import { SOLANA_NETWORKS } from "@powerchain/data";

export async function GET() {
  return Response.json({
    data: SOLANA_NETWORKS,
    meta: { requestId: crypto.randomUUID(), defaultNetwork: "devnet" },
  }, { headers: { "cache-control": "public, max-age=60" } });
}
