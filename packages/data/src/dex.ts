export type DexProvider = "jupiter" | "raydium" | "orca" | "meteora";
export interface DexQuoteSummary { provider: DexProvider; inputMint: string; outputMint: string; inAmount: string; outAmount: string; priceImpactPct?: string; fetchedAt: string }
