export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export function shorten(value: string, left = 6, right = 4): string {
  if (left < 0 || right < 0) throw new RangeError("shorten lengths must be non-negative");
  if (value.length <= left + right + 1) return value;
  return `${value.slice(0, left)}…${value.slice(-right)}`;
}

export function nonEmpty(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}
