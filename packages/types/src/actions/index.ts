export type PowerChainActionId = "campaign.contribute" | "campaign.refund" | "milestone.claim" | "wallet.send" | "token.claim";
export interface PowerChainActionDescriptor { id: PowerChainActionId; label: string; href: string; walletSignatureRequired: boolean; description?: string; }
export interface PowerChainActionManifest { version: "1.0.0"; name: string; actions: PowerChainActionDescriptor[]; }
