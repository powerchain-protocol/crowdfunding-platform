export type ActivityKind = "CONTRIBUTION" | "OFFER" | "ESCROW_FUNDED" | "MILESTONE_APPROVED" | "TRANCHE_RELEASED";

export interface PublicActivityItem {
  id: string;
  kind: ActivityKind;
  listingOrCampaignId: string;
  transactionHash?: string;
  publicActor?: string;
  amount?: string;
  asset?: string;
  createdAt: string;
}

export interface ContributorRank {
  rank: 1 | 2 | 3;
  contributor: string;
  amountBaseUnits: string;
  campaign: string;
}

export function normalizePollIntervalMs(value: string | number | undefined): number {
  const parsed = typeof value === "number" ? value : Number(value ?? 10_000);
  if (!Number.isFinite(parsed)) return 10_000;
  return Math.min(15_000, Math.max(5_000, Math.round(parsed)));
}
