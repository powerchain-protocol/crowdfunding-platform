export type EvidenceKind =
  | "INVOICE"
  | "RECEIPT"
  | "PHOTO"
  | "DOCUMENT"
  | "GPS"
  | "BENEFICIARY_CONFIRMATION"
  | "VENDOR_CONFIRMATION"
  | "ONCHAIN_TRANSACTION"
  | "EXTERNAL_VERIFICATION";

export type EvidenceStatus = "DRAFT" | "SUBMITTED" | "UNDER_REVIEW" | "VERIFIED" | "REJECTED";

export interface MilestoneEvidenceRecord {
  id: string;
  campaignId: string;
  milestoneId: string;
  kind: EvidenceKind;
  fileName: string;
  contentType: string;
  sizeBytes: number;
  sha256: string;
  storageKey?: string;
  status: EvidenceStatus;
  submittedBy: string;
  submittedAt?: string;
  verifiedBy?: string;
  verifiedAt?: string;
  notes?: string;
}

export interface MilestoneReleaseGate {
  milestoneId: string;
  requiredEvidenceCount: number;
  evidence: MilestoneEvidenceRecord[];
  milestoneApproved: boolean;
  treasuryPolicyApproved: boolean;
}

export function getMilestoneReleaseBlockers(gate: MilestoneReleaseGate): string[] {
  const verified = gate.evidence.filter((item) => item.status === "VERIFIED");
  const blockers: string[] = [];
  if (verified.length < gate.requiredEvidenceCount) blockers.push("Required milestone evidence has not been verified.");
  if (!gate.milestoneApproved) blockers.push("Milestone approval is required.");
  if (!gate.treasuryPolicyApproved) blockers.push("Treasury policy approval is required.");
  return blockers;
}

export function canReleaseMilestoneFunds(gate: MilestoneReleaseGate): boolean {
  return getMilestoneReleaseBlockers(gate).length === 0;
}
