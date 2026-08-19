export function toIsoDate(value: Date | string | number): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) throw new RangeError("Invalid date");
  return date.toISOString();
}

export function millisecondsUntil(value: Date | string | number, now = Date.now()): number {
  const target = value instanceof Date ? value.getTime() : new Date(value).getTime();
  if (!Number.isFinite(target)) return 0;
  return Math.max(0, target - now);
}
