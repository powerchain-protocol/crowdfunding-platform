import { SOLANA_NETWORKS, type SolanaNetworkId } from "./networks";

export const BLOCKCHAINS = [
  {
    id: "solana",
    label: "Solana",
    enabled: true,
    networks: SOLANA_NETWORKS.map((network) => network.id),
  },
  { id: "sui", label: "Sui", enabled: false, networks: [] as string[] },
] as const;

export function solanaExplorerUrl(kind: "address" | "tx", value: string, network: SolanaNetworkId): string {
  const cluster = SOLANA_NETWORKS.find((item) => item.id === network)?.explorerClusterQuery ?? "";
  return `https://explorer.solana.com/${kind}/${encodeURIComponent(value)}${cluster}`;
}
