import type { PaymentIntentStatus } from "@powerchain/types";

const transitions: Record<PaymentIntentStatus, readonly PaymentIntentStatus[]> = {
  CREATED: ["QUOTED", "AWAITING_PAYMENT", "CANCELLED", "EXPIRED"],
  QUOTED: ["READY", "CANCELLED", "EXPIRED"],
  READY: ["AWAITING_PAYMENT", "AWAITING_SIGNATURE", "CANCELLED", "EXPIRED"],
  AWAITING_PAYMENT: ["BANK_TRANSFER_OBSERVED", "ONCHAIN_SETTLEMENT_OBSERVED", "CANCELLED", "EXPIRED"],
  AWAITING_SIGNATURE: ["SUBMITTED", "CANCELLED", "REJECTED", "EXPIRED"],
  SUBMITTED: ["CONFIRMING", "FAILED", "REQUIRES_REVIEW"],
  BANK_TRANSFER_OBSERVED: ["ONCHAIN_SETTLEMENT_OBSERVED", "REQUIRES_REVIEW"],
  ONCHAIN_SETTLEMENT_OBSERVED: ["CONFIRMING", "REQUIRES_REVIEW"],
  CONFIRMING: ["SETTLED", "FAILED", "REQUIRES_REVIEW"],
  SETTLED: ["RECONCILING", "REQUIRES_REVIEW"],
  RECONCILING: ["RECONCILED", "REQUIRES_REVIEW", "FAILED"],
  RECONCILED: ["RECEIPTED"],
  RECEIPTED: [],
  EXPIRED: [],
  CANCELLED: [],
  FAILED: [],
  REJECTED: [],
  REQUIRES_REVIEW: ["CONFIRMING", "RECONCILING", "FAILED", "CANCELLED"],
};

export function canTransitionPayment(from: PaymentIntentStatus, to: PaymentIntentStatus): boolean {
  return transitions[from].includes(to);
}

export function assertPaymentTransition(from: PaymentIntentStatus, to: PaymentIntentStatus): void {
  if (!canTransitionPayment(from, to)) throw new Error(`Invalid payment transition: ${from} -> ${to}`);
}

export const CONTRIBUTION_RECOGNITION_STATES: readonly PaymentIntentStatus[] = ["RECONCILED", "RECEIPTED"];
