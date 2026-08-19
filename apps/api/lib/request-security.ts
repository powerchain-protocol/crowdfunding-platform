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

const DEFAULT_MAX_JSON_BYTES = 1024 * 1024;

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

function requestOrigin(request: Request): string {
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  if (forwardedProto && forwardedHost) return `${forwardedProto}://${forwardedHost}`;
  return new URL(request.url).origin;
}

/**
 * Enforce same-origin / explicitly configured PowerChain origin for state-changing browser requests.
 * Requests without an Origin header are accepted only when Fetch Metadata does not identify them as cross-site.
 */
export function assertSameOrigin(request: Request): void {
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  const currentOrigin = requestOrigin(request);
  const configured = allowedOrigins();

  if (origin) {
    if (origin === currentOrigin || configured.includes(origin)) return;
    throw new Error("Request origin is not allowed.");
  }

  if (fetchSite === "cross-site") {
    throw new Error("Cross-site request is not allowed.");
  }
}

/** Parse a bounded JSON request body without trusting Content-Length alone. */
export async function readJson<T>(request: Request, maxBytes = DEFAULT_MAX_JSON_BYTES): Promise<T> {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/json") && !contentType.includes("+json")) {
    throw new Error("Content-Type must be application/json.");
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    throw new Error("JSON request body is too large.");
  }

  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > maxBytes) {
    throw new Error("JSON request body is too large.");
  }
  if (!text.trim()) throw new Error("JSON request body is required.");

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error("Request body contains invalid JSON.");
  }
}
