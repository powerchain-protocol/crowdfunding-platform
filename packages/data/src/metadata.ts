export interface AssetMetadata { id: string; name: string; symbol?: string; image?: string; description?: string; externalUrl?: string; source: "onchain" | "provider" | "manual" }
export const EMPTY_METADATA: AssetMetadata = { id: "unknown", name: "Unknown asset", source: "manual" };
