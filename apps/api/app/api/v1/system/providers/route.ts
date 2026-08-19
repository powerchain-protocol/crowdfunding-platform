import { success } from "@powerchain/api-core";
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
    note: "Provider status exposes configuration posture only; credentials and RPC URLs are never returned.",
  }));
}
