const PUBLIC_ORIGIN_KEYS = [
  "NEXT_PUBLIC_WEB_URL",
  "NEXT_PUBLIC_CROWDFUNDING_URL",
  "NEXT_PUBLIC_DONATE_URL",
  "NEXT_PUBLIC_CHECKOUT_URL",
  "NEXT_PUBLIC_DASHBOARD_URL",
  "NEXT_PUBLIC_TREASURY_URL",
  "NEXT_PUBLIC_ADMIN_URL",
  "NEXT_PUBLIC_EXPLORER_URL",
  "NEXT_PUBLIC_DOCS_URL",
  "NEXT_PUBLIC_PWA_URL",
] as const;

function toOrigin(value: string | undefined): string | null {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

export function allowedOrigins(): string[] {
  return [...new Set(PUBLIC_ORIGIN_KEYS.map((key) => toOrigin(process.env[key])).filter((value): value is string => value !== null))];
}

export function isAllowedOrigin(origin: string | null): origin is string {
  if (!origin) return false;
  return allowedOrigins().includes(origin);
}
