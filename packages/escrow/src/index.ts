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
  /** Immutable snapshot captured when the escrow/tranche becomes funded. */
  platformFeeBpsSnapshot: number;
  fundedAt?: string;
  releasedAt?: string;
  releaseTransactionId?: string;
}

export interface EscrowReleaseInput {
  tranche: EscrowTranche;
  evidenceGate: MilestoneReleaseGate;
  identityVerified: boolean;
  agreementSigned: boolean;
  investorApproved: boolean;
}

export function platformFeeMinor(amountMinor: bigint, basisPoints: number): bigint {
  if (!Number.isInteger(basisPoints) || basisPoints < 0 || basisPoints > 10_000) throw new Error("Invalid fee basis points.");
  return amountMinor * BigInt(basisPoints) / 10_000n;
}

export function snapshotFundedTranche(input: Omit<EscrowTranche, "platformFeeBpsSnapshot" | "fundedAt" | "status"> & { platformFeeBps: number; fundedAt: string }): EscrowTranche {
  if (!Number.isInteger(input.platformFeeBps) || input.platformFeeBps < 0 || input.platformFeeBps > 10_000) throw new Error("Invalid fee basis points.");
  return {
    id: input.id,
    campaignId: input.campaignId,
    milestoneId: input.milestoneId,
    label: input.label,
    amountMinor: input.amountMinor,
    asset: input.asset,
    status: "FUNDED",
    platformFeeBpsSnapshot: input.platformFeeBps,
    fundedAt: input.fundedAt,
    ...(input.releasedAt ? { releasedAt: input.releasedAt } : {}),
    ...(input.releaseTransactionId ? { releaseTransactionId: input.releaseTransactionId } : {}),
  };
}

export function trancheNetMinor(tranche: EscrowTranche): bigint {
  return tranche.amountMinor - platformFeeMinor(tranche.amountMinor, tranche.platformFeeBpsSnapshot);
}

export function escrowReleaseBlockers(input: EscrowReleaseInput): string[] {
  const blockers = [...getMilestoneReleaseBlockers(input.evidenceGate)];
  if (!input.identityVerified) blockers.push("Required identity/business verification is incomplete.");
  if (!input.agreementSigned) blockers.push("Required agreement has not been fully signed.");
  if (!input.investorApproved) blockers.push("Investor approval is required for this milestone tranche.");
  if (!input.tranche.fundedAt) blockers.push("Tranche funding has not been finalized.");
  if (input.tranche.status === "RELEASED") blockers.push("Tranche has already been released.");
  return blockers;
}

export function canReleaseEscrowTranche(input: EscrowReleaseInput): boolean {
  return canReleaseMilestoneFunds(input.evidenceGate)
    && input.identityVerified
    && input.agreementSigned
    && input.investorApproved
    && Boolean(input.tranche.fundedAt)
    && input.tranche.status !== "RELEASED";
}
