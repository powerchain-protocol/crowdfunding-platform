export interface LiquidityPoolView { id: string; dex: "JUPITER" | "RAYDIUM" | "ORCA" | "METEORA" | "OTHER"; baseMint: string; quoteMint: string; liquidityUsd?: string; network: "devnet" | "mainnet-beta" }
export const demoPools: readonly LiquidityPoolView[] = [];
