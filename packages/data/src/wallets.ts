export type WalletConnectorId = "phantom" | "solflare" | "backpack" | "embedded";

export interface WalletConnectorDefinition {
  id: WalletConnectorId;
  label: string;
  kind: "extension" | "embedded";
  networks: readonly ["devnet", "mainnet-beta"];
}

export const WALLET_CONNECTORS: readonly WalletConnectorDefinition[] = [
  { id: "phantom", label: "Phantom", kind: "extension", networks: ["devnet", "mainnet-beta"] },
  { id: "solflare", label: "Solflare", kind: "extension", networks: ["devnet", "mainnet-beta"] },
  { id: "backpack", label: "Backpack", kind: "extension", networks: ["devnet", "mainnet-beta"] },
  { id: "embedded", label: "Embedded wallet", kind: "embedded", networks: ["devnet", "mainnet-beta"] },
] as const;
