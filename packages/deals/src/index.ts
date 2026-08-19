export type DealInstrument = "EQUITY" | "SAFE_NOTE" | "CONVERTIBLE_NOTE" | "REVENUE_BASED" | "OTHER";
export type ListingStatus = "DRAFT" | "UNDER_REVIEW" | "VERIFIED" | "LIVE" | "PAUSED" | "CLOSED";
export type OfferStatus = "DRAFT" | "SUBMITTED" | "COUNTERED" | "ACCEPTED" | "REJECTED" | "WITHDRAWN" | "EXPIRED";

export interface DealTranche {
  id: string;
  ordinal: number;
  title: string;
  amountMinor: bigint;
  targetDate?: string;
  milestoneSummary: string;
  proofRequirements: string[];
}

export interface DealTerms {
  currency: "EUR" | "USD";
  instrument: DealInstrument;
  minimumInvestmentMinor?: bigint;
  valuationText?: string;
  equityPercentText?: string;
  maturityDate?: string;
  interestText?: string;
  jurisdiction?: string;
  platformFeeBps: number;
}

export interface FounderListing {
  id: string;
  slug: string;
  founderOrganizationId: string;
  productName: string;
  tagline: string;
  category: string;
  stage: string;
  location: string;
  pitchDeckUrl?: string;
  demoVideoUrl?: string;
  status: ListingStatus;
  verified: boolean;
  tranches: DealTranche[];
  terms: DealTerms;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  linkedInUrl?: string;
}

export interface InvestorOffer {
  id: string;
  listingId: string;
  investorId: string;
  amountMinor: bigint;
  currency: "EUR" | "USD";
  terms: Record<string, string>;
  status: OfferStatus;
  createdAt: string;
  updatedAt: string;
}

export function validateTranchePlan(tranches: readonly DealTranche[]): string[] {
  const errors: string[] = [];
  if (tranches.length < 3 || tranches.length > 5) errors.push("A raise must contain 3–5 milestone tranches.");
  if (new Set(tranches.map((item) => item.ordinal)).size !== tranches.length) errors.push("Tranche ordinals must be unique.");
  if (tranches.some((item) => item.amountMinor <= 0n)) errors.push("Every tranche amount must be greater than zero.");
  if (tranches.some((item) => item.proofRequirements.length === 0)) errors.push("Every tranche must define at least one proof requirement.");
  return errors;
}

export function deriveRaiseGoalMinor(tranches: readonly DealTranche[]): bigint {
  const errors = validateTranchePlan(tranches);
  if (errors.length) throw new Error(errors.join(" "));
  return tranches.reduce((total, tranche) => total + tranche.amountMinor, 0n);
}

export function snapshotPlatformFeeBps(terms: DealTerms): number {
  if (!Number.isInteger(terms.platformFeeBps) || terms.platformFeeBps < 0 || terms.platformFeeBps > 10_000) {
    throw new Error("Platform fee basis points must be an integer between 0 and 10,000.");
  }
  return terms.platformFeeBps;
}
