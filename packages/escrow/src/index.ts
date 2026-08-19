import type { MilestoneReleaseGate } from "@powerchain/evidence";
import { canReleaseMilestoneFunds, getMilestoneReleaseBlockers } from "@powerchain/evidence";

export type EscrowStatus = "PROVISIONING" | "FUNDED" | "ACTIVE" | "PAUSED" | "COMPLETED" | "CANCELLED";
export type TrancheStatus = "PLANNED" | "FUNDED" | "EVIDENCE_REQUIRED" | "READY_FOR_APPROVAL" | "APPROVED" | "RELEASED" | "REJECTED";

export interface EscrowTranche {
  id: string;
  campaignId: string;
  milestoneId: string;
  label: string;
  amountMinor: bigint;
  asset: string;
  status: TrancheStatus;
  platformFeeBps: number;
  releasedAt?: string;
  releaseTransactionId?: string;
}

export interface EscrowReleaseInput {
  tranche: EscrowTranche;
  evidenceGate: MilestoneReleaseGate;
  identityVerified: boolean;
  agreementSigned: boolean;
}

export function platformFeeMinor(amountMinor: bigint, basisPoints: number): bigint {
  if (!Number.isInteger(basisPoints) || basisPoints < 0 || basisPoints > 10_000) throw new Error("Invalid fee basis points.");
  return amountMinor * BigInt(basisPoints) / 10_000n;
}

export function escrowReleaseBlockers(input: EscrowReleaseInput): string[] {
  const blockers = [...getMilestoneReleaseBlockers(input.evidenceGate)];
  if (!input.identityVerified) blockers.push("Required identity/business verification is incomplete.");
  if (!input.agreementSigned) blockers.push("Required agreement has not been fully signed.");
  if (input.tranche.status === "RELEASED") blockers.push("Tranche has already been released.");
  return blockers;
}

export function canReleaseEscrowTranche(input: EscrowReleaseInput): boolean {
  return canReleaseMilestoneFunds(input.evidenceGate) && input.identityVerified && input.agreementSigned && input.tranche.status !== "RELEASED";
}
