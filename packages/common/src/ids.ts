export function requestId(prefix = "req"): string {
  const safePrefix = prefix.trim().replace(/[^a-zA-Z0-9_-]/g, "") || "req";
  return `${safePrefix}_${globalThis.crypto.randomUUID().replaceAll("-", "")}`;
}

export function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
