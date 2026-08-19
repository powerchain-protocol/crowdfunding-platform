export type PowerChainSolanaCluster = "devnet" | "mainnet-beta";
export type SolanaRpcProvider = "auto" | "public" | "helius";

const PUBLIC_RPC = {
  devnet: "https://api.devnet.solana.com",
  "mainnet-beta": "https://api.mainnet.solana.com",
} as const satisfies Record<PowerChainSolanaCluster, string>;

const PUBLIC_WS = {
  devnet: "wss://api.devnet.solana.com",
  "mainnet-beta": "wss://api.mainnet.solana.com",
} as const satisfies Record<PowerChainSolanaCluster, string>;

function value(env: NodeJS.ProcessEnv, key: string): string | undefined {
  const candidate = env[key]?.trim();
  return candidate ? candidate : undefined;
}

export function normalizeSolanaCluster(input?: string): PowerChainSolanaCluster {
  return input === "mainnet" || input === "mainnet-beta" ? "mainnet-beta" : "devnet";
}

export function resolveSolanaRpcConfig(env: NodeJS.ProcessEnv = process.env) {
  const cluster = normalizeSolanaCluster(value(env, "SOLANA_CLUSTER") ?? value(env, "POWERCHAIN_NETWORK"));
  const rawProvider = value(env, "SOLANA_RPC_PROVIDER");
  const provider: SolanaRpcProvider = rawProvider === "public" || rawProvider === "helius" ? rawProvider : "auto";
  const suffix = cluster === "devnet" ? "DEVNET" : "MAINNET";

  const explicitRpc = value(env, `HELIUS_${suffix}_RPC_URL`);
  const secureRpc =
    value(env, `HELIUS_${suffix}_SECURE_RPC_URL`) ??
    value(env, `HELIUS_SECURE_${suffix}_RPC_URL`);
  const explicitWs = value(env, `HELIUS_${suffix}_WS_URL`);
  const apiKey = value(env, "HELIUS_API_KEY");
  const compatibilityRpc = value(env, "SOLANA_RPC_URL");
  const compatibilityWs = value(env, "SOLANA_WS_URL");
  const publicRpc = value(env, `SOLANA_${suffix}_RPC_URL`) ?? PUBLIC_RPC[cluster];
  const publicWs = value(env, `SOLANA_${suffix}_WS_URL`) ?? PUBLIC_WS[cluster];

  const heliusRpcFromKey = apiKey
    ? `https://${cluster === "devnet" ? "devnet" : "mainnet"}.helius-rpc.com/?api-key=${encodeURIComponent(apiKey)}`
    : undefined;
  const heliusWsFromKey = apiKey
    ? `wss://${cluster === "devnet" ? "devnet" : "mainnet"}.helius-rpc.com/?api-key=${encodeURIComponent(apiKey)}`
    : undefined;

  const heliusRpc = secureRpc ?? explicitRpc ?? heliusRpcFromKey;
  const heliusWs = explicitWs ?? heliusWsFromKey;

  if (provider === "helius" && !heliusRpc) {
    throw new Error(`SOLANA_RPC_PROVIDER=helius but no Helius ${cluster} RPC is configured`);
  }

  if (provider === "public") {
    return {
      cluster,
      provider: "public" as const,
      rpcUrl: publicRpc,
      wsUrl: publicWs,
      fallbackRpcUrl: publicRpc,
    };
  }

  if (heliusRpc) {
    return {
      cluster,
      provider: "helius" as const,
      rpcUrl: heliusRpc,
      wsUrl: heliusWs ?? publicWs,
      fallbackRpcUrl: publicRpc,
    };
  }

  // Legacy compatibility URLs are only used when explicitly supplied. New
  // deployments should prefer the cluster-specific variables above so changing
  // SOLANA_CLUSTER cannot accidentally keep a Devnet URL on Mainnet.
  return {
    cluster,
    provider: compatibilityRpc ? "configured" as const : "public" as const,
    rpcUrl: compatibilityRpc ?? publicRpc,
    wsUrl: compatibilityWs ?? publicWs,
    fallbackRpcUrl: publicRpc,
  };
}

export function getSolanaProviderStatus(env: NodeJS.ProcessEnv = process.env) {
  const resolved = resolveSolanaRpcConfig(env);
  return {
    cluster: resolved.cluster,
    provider: resolved.provider,
    rpcConfigured: Boolean(resolved.rpcUrl),
    websocketConfigured: Boolean(resolved.wsUrl),
    heliusApiKeyConfigured: Boolean(value(env, "HELIUS_API_KEY")),
    heliusSecureRpcConfigured: Boolean(
      value(env, "HELIUS_DEVNET_SECURE_RPC_URL") ||
      value(env, "HELIUS_MAINNET_SECURE_RPC_URL") ||
      value(env, "HELIUS_SECURE_DEVNET_RPC_URL") ||
      value(env, "HELIUS_SECURE_MAINNET_RPC_URL"),
    ),
  } as const;
}
