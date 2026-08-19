export function formatMoney(amount: string | number | bigint, currency = "EUR", locale = "en"): string {
  const numeric = typeof amount === "bigint" ? Number(amount) : typeof amount === "number" ? amount : Number(amount);
  if (!Number.isFinite(numeric)) return String(amount);
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(numeric);
}

export function applyBasisPoints(amountMinor: bigint, basisPoints: number): bigint {
  if (!Number.isInteger(basisPoints) || basisPoints < 0 || basisPoints > 10_000) {
    throw new RangeError("basisPoints must be an integer from 0 to 10000");
  }
  return (amountMinor * BigInt(basisPoints)) / 10_000n;
}

export function deriveGoalFromTranches(amountsMinor: readonly bigint[]): bigint {
  if (amountsMinor.length < 3 || amountsMinor.length > 5) {
    throw new RangeError("campaigns require 3 to 5 milestone tranches");
  }
  if (amountsMinor.some((amount) => amount <= 0n)) throw new RangeError("tranche amounts must be positive");
  return amountsMinor.reduce((total, amount) => total + amount, 0n);
}
