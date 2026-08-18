import type { CampaignStatus, FundingModel } from "@powerchain/types";

export interface FundingPolicy {
  model: FundingModel;
  targetAmount: string;
  currency: "EUR" | "USD";
  overfunding: "ALLOW" | "CAP_AT_TARGET";
  minimumContribution?: string;
  maximumContribution?: string;
  startsAt: string;
  endsAt?: string;
}

const lifecycle: Record<CampaignStatus, readonly CampaignStatus[]> = {
  DRAFT: ["SUBMITTED", "CANCELLED"],
  SUBMITTED: ["VALIDATING", "CANCELLED"],
  VALIDATING: ["VERIFIED", "REJECTED", "UNDER_REVIEW"],
  VERIFIED: ["TREASURY_PROVISIONING", "UNDER_REVIEW"],
  TREASURY_PROVISIONING: ["TREASURY_READY", "UNDER_REVIEW"],
  TREASURY_READY: ["PUBLISHED", "UNDER_REVIEW"],
  PUBLISHED: ["FUNDING", "SUSPENDED"],
  FUNDING: ["FUNDED", "EXECUTING", "SUSPENDED", "CANCELLED"],
  FUNDED: ["EXECUTING", "SUSPENDED"],
  EXECUTING: ["COMPLETED", "SUSPENDED"],
  COMPLETED: ["CLOSED"],
  CLOSED: [],
  SUSPENDED: ["FUNDING", "EXECUTING", "CANCELLED"],
  REJECTED: [],
  CANCELLED: [],
  UNDER_REVIEW: ["VALIDATING", "VERIFIED", "SUSPENDED", "REJECTED"],
};

export function canTransitionCampaign(from: CampaignStatus, to: CampaignStatus): boolean {
  return lifecycle[from].includes(to);
}


export interface CampaignMilestone {
  id: string;
  campaignId: string;
  title: string;
  description: string;
  targetAmount: string;
  targetDate?: string;
  evidenceRequired: boolean;
  approvalRequired: boolean;
  disbursementLimit: string;
  status: "DRAFT" | "ACTIVE" | "EVIDENCE_REQUIRED" | "UNDER_REVIEW" | "APPROVED" | "COMPLETED";
}
