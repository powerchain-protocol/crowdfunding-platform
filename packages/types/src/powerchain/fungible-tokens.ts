export type PowerChainTokenStandard = "SPL" | "TOKEN_2022";
export interface FungibleTokenDefinition {
  id: string;
  symbol: string;
  name: string;
  mint: string;
  decimals: number;
  network: "devnet" | "mainnet-beta";
  standard: PowerChainTokenStandard;
  logoUrl?: string;
  verified: boolean;
}
export interface FungibleTokenAmount {
  token: FungibleTokenDefinition;
  baseUnits: bigint;
  uiAmount: string;
}
