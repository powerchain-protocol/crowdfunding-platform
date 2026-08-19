export interface PricePoint { asset: string; currency: "USD" | "EUR" | "GBP"; value: string; source: string; observedAt: string }
export function isFreshPrice(point: PricePoint, maxAgeMs = 30_000): boolean { return Date.now() - Date.parse(point.observedAt) <= maxAgeMs; }
