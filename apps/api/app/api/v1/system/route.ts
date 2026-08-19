import { success } from "@powerchain/api-core";
import {
  API_VERSION,
  PLATFORM_VERSION,
  getPrismaDatabaseConfigStatus,
  getSolanaProviderStatus,
  getSupabaseConfigStatus,
} from "@powerchain/config";
import { SERVICE_REGISTRY } from "@powerchain/service-registry";

export const dynamic = "force-dynamic";

export async function GET() {
  let solana: ReturnType<typeof getSolanaProviderStatus> | { error: "invalid-configuration" };
  try {
    solana = getSolanaProviderStatus(process.env);
  } catch {
    solana = { error: "invalid-configuration" };
  }

  return Response.json(success({
    version: PLATFORM_VERSION,
    apiVersion: API_VERSION,
    node: process.version,
    environment: process.env.POWERCHAIN_ENV ?? "development",
    dataMode: process.env.POWERCHAIN_DATA_MODE ?? "mock",
    writeMode: process.env.POWERCHAIN_WRITE_MODE ?? "simulated",
    health: {
      liveness: "/api/v1/health/live",
      readiness: "/api/v1/health/ready",
    },
    services: {
      count: SERVICE_REGISTRY.length,
      registry: "/api/v1/system/services",
    },
    crowdfunding: {
      programId: process.env.CROWDFUNDING_PROGRAM_ID ? "configured" : "unconfigured",
      registryProgramId: process.env.REGISTRY_PROGRAM_ID ? "configured" : "unconfigured",
      contributorsProgramId: process.env.CONTRIBUTORS_PROGRAM_ID ? "configured" : "unconfigured",
      milestoneEscrowProgramId: process.env.SOLANA_MILESTONE_ESCROW_PROGRAM_ID ? "configured" : "unconfigured",
    },
    realtime: {
      websocket: Boolean(process.env.ACTIVITY_WS_URL),
      sse: true,
      pollFallbackMs: Number(process.env.NEXT_PUBLIC_ACTIVITY_POLL_MS ?? 10000),
    },
    payments: {
      mode: process.env.PAYMENTS_MODE ?? "demo",
      midtrans: process.env.MIDTRANS_SERVER_KEY ? "configured" : "unconfigured",
    },
    providers: {
      solana,
      supabase: getSupabaseConfigStatus(process.env),
      prisma: getPrismaDatabaseConfigStatus(process.env),
      sui: process.env.SUI_RPC_URL ? "configured" : "unconfigured",
      evm: process.env.EVM_RPC_URL ? "configured" : "unconfigured",
      monerium: process.env.MONERIUM_CLIENT_ID ? "configured" : "unconfigured",
    },
  }));
}
