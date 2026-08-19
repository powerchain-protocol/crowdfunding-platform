import type { SolanaNetworkId } from "./networks";

export interface WalletTokenBalance {
  mint: string;
  amount: string;
  decimals: number;
  program: "spl-token" | "token-2022";
}

export interface WalletData {
  address: string;
  network: SolanaNetworkId;
  lamports: string;
  sol: string;
  tokens: readonly WalletTokenBalance[];
  signatures: readonly { signature: string; slot: number; blockTime: number | null; err: unknown }[];
  fetchedAt: string;
}

export async function fetchWalletData(
  address: string,
  network: SolanaNetworkId = "devnet",
  options: { apiBaseUrl?: string; signal?: AbortSignal } = {},
): Promise<WalletData> {
  const runtime = globalThis as typeof globalThis & { process?: { env?: Record<string, string | undefined> } };
  const base = options.apiBaseUrl ?? runtime.process?.env?.NEXT_PUBLIC_API_URL ?? "http://localhost:3010";
  const response = await fetch(`${base}/api/v1/wallets/${encodeURIComponent(address)}?network=${network}`, {
    credentials: "include",
    cache: "no-store",
    ...(options.signal ? { signal: options.signal } : {}),
  });
  if (!response.ok) throw new Error(`Wallet data request failed with ${response.status}.`);
  const body = (await response.json()) as { data: WalletData };
  return body.data;
}
