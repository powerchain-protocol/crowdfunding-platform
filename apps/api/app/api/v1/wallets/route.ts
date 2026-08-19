import { WALLET_CONNECTORS } from "@powerchain/data";
import { PLATFORM_DEFAULTS } from "@powerchain/config";

export async function GET() {
  return Response.json({
    data: {
      connectors: WALLET_CONNECTORS,
      defaults: PLATFORM_DEFAULTS,
      embeddedEnabled: process.env.EMBEDDED_WALLET_ENABLED === "true",
    },
    meta: { requestId: crypto.randomUUID() },
  }, { headers: { "cache-control": "public, max-age=30" } });
}
