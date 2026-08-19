export type SolanaNetworkId = "devnet" | "mainnet-beta";

export interface SolanaNetworkDefinition {
  id: SolanaNetworkId;
  label: string;
  production: boolean;
  publicRpcUrl: string;
  publicWebsocketUrl: string;
  explorerClusterQuery: string;
}

export const SOLANA_NETWORKS: readonly SolanaNetworkDefinition[] = [
  {
    id: "devnet",
    label: "Devnet",
    production: false,
    publicRpcUrl: "https://api.devnet.solana.com",
    publicWebsocketUrl: "wss://api.devnet.solana.com",
    explorerClusterQuery: "?cluster=devnet",
  },
  {
    id: "mainnet-beta",
    label: "Mainnet Beta",
    production: true,
    publicRpcUrl: "https://api.mainnet.solana.com",
    publicWebsocketUrl: "wss://api.mainnet.solana.com",
    explorerClusterQuery: "",
  },
] as const;

export const DEFAULT_SOLANA_NETWORK: SolanaNetworkId = "devnet";

export function getSolanaNetwork(id: SolanaNetworkId): SolanaNetworkDefinition {
  const network = SOLANA_NETWORKS.find((item) => item.id === id);
  if (!network) throw new Error(`Unsupported Solana network: ${id}`);
  return network;
}
