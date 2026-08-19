export type AirdropStatus = "DRAFT" | "READY" | "SUBMITTED" | "CONFIRMED" | "FAILED";
export interface AirdropRecipient { address: string; amountBaseUnits: bigint }
export interface AirdropPlan { id: string; mint: string; network: "devnet" | "mainnet-beta"; recipients: readonly AirdropRecipient[]; status: AirdropStatus }
