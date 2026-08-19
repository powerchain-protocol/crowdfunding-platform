export type TokenNetwork = "devnet" | "mainnet-beta";
export interface TokenMarketRef { mint: string; symbol: string; network: TokenNetwork; decimals: number; verified: boolean }
