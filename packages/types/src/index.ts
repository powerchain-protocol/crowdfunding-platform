export type CampaignPurpose =
  | "DISASTER_RELIEF"
  | "HUMANITARIAN"
  | "MEDICAL"
  | "PUBLIC_GOOD"
  | "RENEWABLES"
  | "COMMUNITY"
  | "EVENT"
  | "OTHER";

export type ParticipationMode = "CONTRIBUTION" | "ATTESTATION" | "TICKET";
export type FundingModel = "FLEXIBLE" | "ALL_OR_NOTHING";

export type CampaignStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "VALIDATING"
  | "VERIFIED"
  | "TREASURY_PROVISIONING"
  | "TREASURY_READY"
  | "PUBLISHED"
  | "FUNDING"
  | "FUNDED"
  | "EXECUTING"
  | "COMPLETED"
  | "CLOSED"
  | "SUSPENDED"
  | "REJECTED"
  | "CANCELLED"
  | "UNDER_REVIEW";

export interface CampaignSummary {
  id: string;
  slug: string;
  title: string;
  purpose: CampaignPurpose;
  participation: ParticipationMode;
  status: CampaignStatus;
  targetAmount: string;
  raisedAmount: string;
  currency: "EUR" | "USD";
  region: string;
}

export type PaymentMethod = "SEPA" | "SEPA_INSTANT" | "WALLET" | "SOLANA_PAY" | "BLINK" | "ONRAMP";
export type SettlementAsset = "EURe" | "USDC";

export type PaymentIntentStatus =
  | "CREATED"
  | "QUOTED"
  | "READY"
  | "AWAITING_PAYMENT"
  | "AWAITING_SIGNATURE"
  | "SUBMITTED"
  | "BANK_TRANSFER_OBSERVED"
  | "ONCHAIN_SETTLEMENT_OBSERVED"
  | "CONFIRMING"
  | "SETTLED"
  | "RECONCILING"
  | "RECONCILED"
  | "RECEIPTED"
  | "EXPIRED"
  | "CANCELLED"
  | "FAILED"
  | "REJECTED"
  | "REQUIRES_REVIEW";

export interface PaymentIntent {
  id: string;
  campaignId: string;
  amount: string;
  displayCurrency: "EUR" | "USD";
  paymentMethod: PaymentMethod;
  settlementAsset: SettlementAsset;
  status: PaymentIntentStatus;
  reference?: string;
  expiresAt?: string;
}

export type ApiSuccess<T> = { data: T; meta: { requestId: string } };
export type ApiFailure = { error: { code: string; message: string; requestId: string } };

export * from "./reserve-fund";
export * from "./leaderboard";
export * from "./rewards";
export * from "./fees";
export * from "./treasury";
export * from "./escrow";
export * from "./campaigns";
export * from "./refunds";
export * from "./configs";
export * from "./users";
export * from "./roles";
export * from "./projects";
export * from "./system";
export * from "./company";
export * from "./invoices";
