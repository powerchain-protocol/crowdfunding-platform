export type ReconciliationExceptionCode =
  | "AMOUNT_MISMATCH"
  | "REFERENCE_UNKNOWN"
  | "DUPLICATE_REFERENCE"
  | "TREASURY_MISMATCH"
  | "ASSET_MISMATCH"
  | "DUPLICATE_SETTLEMENT"
  | "SETTLEMENT_REVERSED"
  | "PAYMENT_EXPIRED";

export interface SettlementObservation {
  reference?: string;
  destination: string;
  asset: string;
  amount: string;
  transactionId: string;
  observedAt: string;
}

export interface ExpectedPayment {
  reference: string;
  destination: string;
  asset: string;
  amount: string;
}

export function compareObservation(expected: ExpectedPayment, observed: SettlementObservation): ReconciliationExceptionCode[] {
  const issues: ReconciliationExceptionCode[] = [];
  if (!observed.reference || observed.reference !== expected.reference) issues.push("REFERENCE_UNKNOWN");
  if (observed.destination !== expected.destination) issues.push("TREASURY_MISMATCH");
  if (observed.asset !== expected.asset) issues.push("ASSET_MISMATCH");
  if (observed.amount !== expected.amount) issues.push("AMOUNT_MISMATCH");
  return issues;
}
