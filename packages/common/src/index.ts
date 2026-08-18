export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export function formatMoney(amount: string | number, currency = "EUR", locale = "en"): string {
  const numeric = typeof amount === "number" ? amount : Number(amount);
  if (!Number.isFinite(numeric)) return String(amount);
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(numeric);
}

export function shorten(value: string, left = 6, right = 4): string {
  if (value.length <= left + right + 1) return value;
  return `${value.slice(0, left)}…${value.slice(-right)}`;
}

export function requestId(prefix = "req"): string {
  return `${prefix}_${crypto.randomUUID().replaceAll("-", "")}`;
}
