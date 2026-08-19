import { resolveSolanaRpcConfig, type PowerChainSolanaCluster } from "@powerchain/config/solana";
import { SOLANA_STANDARD_PROGRAM_IDS } from "@powerchain/constants";

const SOLANA_ADDRESS = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

export function isSolanaAddress(value: string): boolean {
  return SOLANA_ADDRESS.test(value);
}

type RpcEnvelope<T> = { jsonrpc: "2.0"; id: number; result?: T; error?: { code: number; message: string } };

async function rpcRequest<T>(url: string, method: string, params: readonly unknown[]): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Solana RPC ${method} failed with HTTP ${response.status}.`);
    const payload = await response.json() as RpcEnvelope<T>;
    if (payload.error) throw new Error(`Solana RPC ${method}: ${payload.error.message}`);
    if (payload.result === undefined) throw new Error(`Solana RPC ${method} returned no result.`);
    return payload.result;
  } finally {
    clearTimeout(timeout);
  }
}

async function resilientRpc<T>(network: PowerChainSolanaCluster, method: string, params: readonly unknown[]): Promise<T> {
  const config = resolveSolanaRpcConfig({ ...process.env, SOLANA_CLUSTER: network });
  try {
    return await rpcRequest<T>(config.rpcUrl, method, params);
  } catch (primary) {
    if (config.fallbackRpcUrl === config.rpcUrl) throw primary;
    return rpcRequest<T>(config.fallbackRpcUrl, method, params);
  }
}

type BalanceResult = { value: number };
type ParsedTokenAccount = {
  pubkey: string;
  account: {
    data?: {
      parsed?: {
        info?: {
          mint?: string;
          tokenAmount?: { amount?: string; decimals?: number };
        };
      };
    };
  };
};
type TokenAccountsResult = { value: ParsedTokenAccount[] };
type SignatureResult = { signature: string; slot: number; blockTime: number | null; err: unknown }[];

export async function getWalletData(address: string, network: PowerChainSolanaCluster) {
  if (!isSolanaAddress(address)) throw new Error("INVALID_SOLANA_ADDRESS");

  const [balance, legacyTokens, token2022, signatures] = await Promise.all([
    resilientRpc<BalanceResult>(network, "getBalance", [address, { commitment: "confirmed" }]),
    resilientRpc<TokenAccountsResult>(network, "getTokenAccountsByOwner", [address, { programId: SOLANA_STANDARD_PROGRAM_IDS.token }, { encoding: "jsonParsed", commitment: "confirmed" }]),
    resilientRpc<TokenAccountsResult>(network, "getTokenAccountsByOwner", [address, { programId: SOLANA_STANDARD_PROGRAM_IDS.token2022 }, { encoding: "jsonParsed", commitment: "confirmed" }]),
    resilientRpc<SignatureResult>(network, "getSignaturesForAddress", [address, { limit: 10, commitment: "confirmed" }]),
  ]);

  const mapToken = (item: ParsedTokenAccount, program: "spl-token" | "token-2022") => {
    const info = item.account.data?.parsed?.info;
    const tokenAmount = info?.tokenAmount;
    return {
      mint: info?.mint ?? "unknown",
      amount: tokenAmount?.amount ?? "0",
      decimals: tokenAmount?.decimals ?? 0,
      program,
    } as const;
  };

  return {
    address,
    network,
    lamports: String(balance.value),
    sol: (balance.value / 1_000_000_000).toFixed(9).replace(/\.?0+$/, ""),
    tokens: [
      ...legacyTokens.value.map((item) => mapToken(item, "spl-token")),
      ...token2022.value.map((item) => mapToken(item, "token-2022")),
    ],
    signatures,
    fetchedAt: new Date().toISOString(),
  };
}
