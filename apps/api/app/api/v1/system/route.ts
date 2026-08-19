import { success } from "@powerchain/api-core";
export const dynamic="force-dynamic";
export async function GET() { return Response.json(success({
  version:"1.0.0", apiVersion:"v1", node:process.version,
  environment: process.env.POWERCHAIN_ENV ?? "development",
  dataMode: process.env.POWERCHAIN_DATA_MODE ?? "mock",
  writeMode: process.env.POWERCHAIN_WRITE_MODE ?? "simulated",
  crowdfunding:{programId:process.env.CROWDFUNDING_PROGRAM_ID?"configured":"unconfigured",registryProgramId:process.env.REGISTRY_PROGRAM_ID?"configured":"unconfigured",contributorsProgramId:process.env.CONTRIBUTORS_PROGRAM_ID?"configured":"unconfigured"},
  realtime:{websocket:Boolean(process.env.ACTIVITY_WS_URL),sse:true,pollFallbackMs:Number(process.env.NEXT_PUBLIC_ACTIVITY_POLL_MS??10000)},
  payments:{mode:process.env.PAYMENTS_MODE??"demo",midtrans:process.env.MIDTRANS_SERVER_KEY?"configured":"unconfigured"},
  providers: { solana: "configured-at-runtime", sui: "configured-at-runtime", evm: "configured-at-runtime", monerium: "server-only" }
})); }
