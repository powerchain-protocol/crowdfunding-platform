export type EmbeddedWalletNetwork = "devnet" | "mainnet-beta";

export interface EmbeddedWalletSessionRequest {
  userId: string;
  network: EmbeddedWalletNetwork;
  returnUrl: string;
}

export interface EmbeddedWalletSessionResult {
  provider: string;
  startUrl: string;
  expiresAt: string;
}

/**
 * Provider boundary for hosted/embedded wallet vendors.
 * PowerChain never receives or stores seed phrases/private keys through this interface.
 * A provider implementation must return a hosted/session URL and keep signing user-owned.
 */
export interface EmbeddedWalletProvider {
  readonly id: string;
  createSession(input: EmbeddedWalletSessionRequest): Promise<EmbeddedWalletSessionResult>;
}

export interface EmbeddedWalletProviderConfig {
  enabled: boolean;
  provider: string;
  startUrl?: string;
}

export function getEmbeddedWalletProviderConfig(env: NodeJS.ProcessEnv = process.env): EmbeddedWalletProviderConfig {
  const enabled = env.EMBEDDED_WALLET_ENABLED === "true";
  const provider = env.EMBEDDED_WALLET_PROVIDER?.trim() || "disabled";
  const startUrl = env.EMBEDDED_WALLET_START_URL?.trim();
  return { enabled, provider, ...(startUrl ? { startUrl } : {}) };
}

export function createConfiguredEmbeddedWalletProvider(env: NodeJS.ProcessEnv = process.env): EmbeddedWalletProvider | null {
  const config = getEmbeddedWalletProviderConfig(env);
  if (!config.enabled || !config.startUrl) return null;
  return {
    id: config.provider,
    async createSession(input) {
      const url = new URL(config.startUrl!);
      url.searchParams.set("network", input.network);
      url.searchParams.set("return_url", input.returnUrl);
      return {
        provider: config.provider,
        startUrl: url.toString(),
        expiresAt: new Date(Date.now() + 5 * 60_000).toISOString(),
      };
    },
  };
}
