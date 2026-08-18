export type LedgerDirection = "DEBIT" | "CREDIT";
export interface LedgerEntry { account: string; direction: LedgerDirection; amountMinor: bigint; asset: string }

export function isBalanced(entries: readonly LedgerEntry[]): boolean {
  const byAsset = new Map<string, bigint>();
  for (const entry of entries) {
    const signed = entry.direction === "DEBIT" ? entry.amountMinor : -entry.amountMinor;
    byAsset.set(entry.asset, (byAsset.get(entry.asset) ?? 0n) + signed);
  }
  return [...byAsset.values()].every((value) => value === 0n);
}

export function assertBalanced(entries: readonly LedgerEntry[]): void {
  if (!isBalanced(entries)) throw new Error("Ledger transaction is not balanced per asset.");
}
