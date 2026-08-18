export type TreasuryPolicyDecision = "ALLOW" | "DENY" | "REQUIRE_APPROVAL" | "REQUIRE_MULTISIG" | "REQUIRE_REVIEW";

export interface TreasuryPolicy {
  id: string;
  threshold: number;
  ownerCount: number;
  milestoneApprovalRequired: boolean;
  evidenceRequired: boolean;
  emergencyPauseEnabled: boolean;
  singleTransactionLimit?: string;
  dailyLimit?: string;
}

export function validateTreasuryPolicy(policy: TreasuryPolicy): string[] {
  const errors: string[] = [];
  if (policy.ownerCount < 1) errors.push("Treasury must have at least one owner.");
  if (policy.threshold < 1) errors.push("Approval threshold must be at least one.");
  if (policy.threshold > policy.ownerCount) errors.push("Approval threshold cannot exceed owner count.");
  return errors;
}
