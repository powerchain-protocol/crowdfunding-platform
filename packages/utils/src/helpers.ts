const POW10 = Array.from({ length: 19 }, (_, i) => 10n ** BigInt(i));

export function normalizeHandle(value: string): string {
  return value.trim().replace(/^@/, "").toLowerCase();
}

export function isSafeHttpsUrl(value: string, allowedHosts?: readonly string[]): boolean {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return false;
    if (url.username || url.password) return false;
    return !allowedHosts || allowedHosts.includes(url.hostname.toLowerCase());
  } catch { return false; }
}

export function assertSafeHttpsUrl(value: string, allowedHosts?: readonly string[]): URL {
  if (!isSafeHttpsUrl(value, allowedHosts)) throw new Error("Unsafe or unsupported external URL.");
  return new URL(value);
}

export function decimalToBaseUnits(value: string, decimals: number): bigint {
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 18) throw new Error("Invalid decimals.");
  const normalized = value.trim();
  if (!/^-?\d+(?:\.\d+)?$/.test(normalized)) throw new Error("Invalid decimal value.");
  const negative = normalized.startsWith("-");
  const unsigned = negative ? normalized.slice(1) : normalized;
  const [whole = "0", fraction = ""] = unsigned.split(".");
  if (fraction.length > decimals) throw new Error(`Too many decimal places; maximum is ${decimals}.`);
  const units = BigInt(whole) * POW10[decimals]! + BigInt((fraction + "0".repeat(decimals)).slice(0, decimals) || "0");
  return negative ? -units : units;
}

export function baseUnitsToDecimal(value: bigint, decimals: number): string {
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 18) throw new Error("Invalid decimals.");
  const negative = value < 0n;
  const absolute = negative ? -value : value;
  if (decimals === 0) return `${negative ? "-" : ""}${absolute}`;
  const base = POW10[decimals]!;
  const whole = absolute / base;
  const fraction = (absolute % base).toString().padStart(decimals, "0").replace(/0+$/, "");
  return `${negative ? "-" : ""}${whole}${fraction ? `.${fraction}` : ""}`;
}

export function basisPoints(amount: bigint, bps: number): bigint {
  if (!Number.isInteger(bps) || bps < 0 || bps > 10_000) throw new Error("Basis points must be between 0 and 10,000.");
  return amount * BigInt(bps) / 10_000n;
}

export function safeId(value: string): string {
  const normalized = value.trim();
  if (!/^[A-Za-z0-9][A-Za-z0-9_-]{1,127}$/.test(normalized)) throw new Error("Invalid identifier.");
  return normalized;
}
