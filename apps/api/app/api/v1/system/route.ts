import { success } from "@powerchain/api-core";
export const dynamic = "force-dynamic";
export async function GET() {
  return Response.json(success({
    environment: process.env.POWERCHAIN_ENV ?? "development",
    dataMode: process.env.POWERCHAIN_DATA_MODE ?? "mock",
    writeMode: process.env.POWERCHAIN_WRITE_MODE ?? "simulated",
    providers: { solana: "configured-at-runtime", sui: "configured-at-runtime", evm: "configured-at-runtime", monerium: "server-only" }
  }));
}
