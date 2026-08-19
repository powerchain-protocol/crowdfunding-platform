export type LedgerDirection = "DEBIT" | "CREDIT";
export type LedgerJournalStatus = "PENDING" | "POSTED" | "REVERSED";

export interface LedgerEntry {
  account: string;
  direction: LedgerDirection;
  amountMinor: bigint;
  asset: string;
}

export interface LedgerJournalDraft {
  reference: string;
  type: string;
  source: string;
  sourceId?: string;
  userId?: string;
  metadata?: Record<string, unknown>;
  entries: readonly LedgerEntry[];
}

export function isBalanced(entries: readonly LedgerEntry[]): boolean {
  const byAsset = new Map<string, bigint>();
  for (const entry of entries) {
    if (entry.amountMinor < 0n) return false;
    const signed = entry.direction === "DEBIT" ? entry.amountMinor : -entry.amountMinor;
    byAsset.set(entry.asset, (byAsset.get(entry.asset) ?? 0n) + signed);
  }
  return [...byAsset.values()].every((value) => value === 0n);
}

export function assertBalanced(entries: readonly LedgerEntry[]): void {
  if (!entries.length) throw new Error("A ledger journal requires at least one posting.");
  if (!isBalanced(entries)) throw new Error("Ledger transaction is not balanced per asset.");
}

export function createCapitalContributionJournal(input: {
  reference: string;
  amountMinor: bigint;
  platformFeeMinor: bigint;
  currency: string;
  potAccount: string;
  sourceId?: string;
  userId?: string;
}): LedgerJournalDraft {
  if (input.amountMinor <= 0n) throw new Error("Contribution amount must be positive.");
  if (input.platformFeeMinor < 0n || input.platformFeeMinor > input.amountMinor) throw new Error("Invalid platform fee.");
  const net = input.amountMinor - input.platformFeeMinor;
  const entries: LedgerEntry[] = [
    { account: "stripe:clearing", direction: "DEBIT", amountMinor: input.amountMinor, asset: input.currency },
    { account: input.potAccount, direction: "CREDIT", amountMinor: net, asset: input.currency },
  ];
  if (input.platformFeeMinor > 0n) entries.push({ account: "platform:fees:receivable", direction: "CREDIT", amountMinor: input.platformFeeMinor, asset: input.currency });
  assertBalanced(entries);
  return {
    reference: input.reference,
    type: "CAPITAL_CONTRIBUTION",
    source: "STRIPE",
    ...(input.sourceId ? { sourceId: input.sourceId } : {}),
    ...(input.userId ? { userId: input.userId } : {}),
    entries,
  };
}

export function createSelfReportedXTipJournal(input: {
  reference: string;
  amountMinor: bigint;
  currency: string;
  creatorAccount: string;
  sourceId?: string;
  userId?: string;
}): LedgerJournalDraft {
  if (input.amountMinor <= 0n) throw new Error("Tip amount must be positive.");
  const entries: LedgerEntry[] = [
    { account: "external:x-money:self-reported", direction: "DEBIT", amountMinor: input.amountMinor, asset: input.currency },
    { account: input.creatorAccount, direction: "CREDIT", amountMinor: input.amountMinor, asset: input.currency },
  ];
  assertBalanced(entries);
  return {
    reference: input.reference,
    type: "X_TIP_SELF_REPORTED",
    source: "X_MONEY_SELF_REPORTED",
    ...(input.sourceId ? { sourceId: input.sourceId } : {}),
    ...(input.userId ? { userId: input.userId } : {}),
    metadata: { authoritativeSettlement: false },
    entries,
  };
}
