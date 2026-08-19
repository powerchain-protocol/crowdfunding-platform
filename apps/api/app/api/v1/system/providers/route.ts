import { success } from "@powerchain/api-core";
import { getEmbeddedWalletProviderConfig } from "@powerchain/providers/embedded-wallets";
import {
  getPrismaDatabaseConfigStatus,
  getSolanaProviderStatus,
  getSupabaseConfigStatus,
} from "@powerchain/config";

export const dynamic = "force-dynamic";

export async function GET() {
  let solana: ReturnType<typeof getSolanaProviderStatus> | { error: "invalid-configuration" };
  try {
    solana = getSolanaProviderStatus(process.env);
  } catch {
    solana = { error: "invalid-configuration" };
  }

  return Response.json(success({
    solana,
    supabase: getSupabaseConfigStatus(process.env),
    prisma: getPrismaDatabaseConfigStatus(process.env),
    embeddedWallet: (() => { const config = getEmbeddedWalletProviderConfig(process.env); return { enabled: config.enabled, provider: config.provider, startUrlConfigured: Boolean(config.startUrl) }; })(),
    note: "Provider status exposes configuration posture only; credentials and RPC URLs are never returned.",
  }));
}
