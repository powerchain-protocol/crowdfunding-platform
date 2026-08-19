export const BPS_DENOMINATOR = 10_000n;
export const PERCENT_BPS = 100n;

export const SUPPORTED_SETTLEMENT_ASSETS = ["EUR", "EURe", "USDC", "PWRC"] as const;
export type SettlementAsset = (typeof SUPPORTED_SETTLEMENT_ASSETS)[number];

export const ASSET_DECIMALS = {
  EUR: 2,
  EURe: 18,
  USDC: 6,
  PWRC: 9,
} as const satisfies Record<SettlementAsset, number>;

export function assertBasisPoints(value: number): number {
  if (!Number.isInteger(value) || value < 0 || value > 10_000) {
    throw new RangeError("basis points must be an integer between 0 and 10000");
  }
  return value;
}
