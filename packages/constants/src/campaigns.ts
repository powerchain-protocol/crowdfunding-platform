export const CAMPAIGN_CATEGORIES = [
  "Humanitarian",
  "Disaster Relief",
  "Medical",
  "Renewables",
  "Environment",
  "Energy",
  "Education",
  "Community",
  "Infrastructure",
  "Technology",
  "Public Good",
  "Event / Ticketed",
  "Other",
] as const;

export type CampaignCategory = (typeof CAMPAIGN_CATEGORIES)[number];

export const CAMPAIGN_WIZARD_STEPS = [
  "Basics",
  "Problem",
  "Goal",
  "Beneficiaries",
  "Budget",
  "Milestones",
  "Participation",
  "Treasury",
  "Evidence",
  "Verification",
  "Review & publish",
] as const;

export const CAMPAIGN_STATUSES = [
  "DRAFT",
  "REVIEW",
  "SCHEDULED",
  "FUNDING",
  "FUNDED",
  "FAILED",
  "REFUNDING",
  "COMPLETED",
  "SUSPENDED",
] as const;

export type CampaignStatus = (typeof CAMPAIGN_STATUSES)[number];

export const PARTICIPATION_MODES = ["CONTRIBUTION", "ATTESTATION", "TICKET"] as const;
export type ParticipationMode = (typeof PARTICIPATION_MODES)[number];

export const CAMPAIGN_TRANCHE_POLICY = {
  minimumCount: 3,
  maximumCount: 5,
  goalDerivedFromTranches: true,
} as const;
