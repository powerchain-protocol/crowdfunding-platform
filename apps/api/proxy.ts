import { NextResponse, type NextRequest } from "next/server";

import {
  API_ALLOWED_HEADERS,
  API_ALLOWED_METHODS,
  API_EXPOSED_HEADERS,
  SECURITY_HEADERS,
} from "../../config/security/headers";
import { isAllowedOrigin } from "./lib/request-security";

function applySecurityHeaders(headers: Headers): void {
  for (const [name, value] of SECURITY_HEADERS) headers.set(name, value);
}

function applyCors(headers: Headers, origin: string): void {
  headers.set("access-control-allow-origin", origin);
  headers.set("access-control-allow-credentials", "true");
  headers.set("access-control-expose-headers", API_EXPOSED_HEADERS);
  headers.set("vary", "Origin");
}

export function proxy(request: NextRequest): NextResponse {
  const origin = request.headers.get("origin");
  const allowed = isAllowedOrigin(origin);

  if (request.method === "OPTIONS") {
    if (origin && !allowed) {
      const denied = NextResponse.json(
        { error: { code: "CORS_ORIGIN_DENIED", message: "Origin is not allowed." } },
        { status: 403 },
      );
      applySecurityHeaders(denied.headers);
      denied.headers.set("vary", "Origin");
      return denied;
    }

    const preflight = new NextResponse(null, { status: 204 });
    if (allowed) applyCors(preflight.headers, origin);
    preflight.headers.set("access-control-allow-methods", API_ALLOWED_METHODS);
    preflight.headers.set("access-control-allow-headers", API_ALLOWED_HEADERS);
    preflight.headers.set("access-control-max-age", "600");
    applySecurityHeaders(preflight.headers);
    return preflight;
  }

  const response = NextResponse.next();
  if (allowed) applyCors(response.headers, origin);
  applySecurityHeaders(response.headers);
  return response;
}

export const config = {
  matcher: ["/api/:path*"],
};
