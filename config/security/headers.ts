export const API_ALLOWED_METHODS = "GET,POST,PUT,PATCH,DELETE,OPTIONS";
export const API_ALLOWED_HEADERS = [
  "authorization",
  "content-type",
  "idempotency-key",
  "x-csrf-token",
  "x-request-id",
].join(",");

export const API_EXPOSED_HEADERS = ["x-request-id"].join(",");

export const SECURITY_HEADERS = [
  ["x-content-type-options", "nosniff"],
  ["referrer-policy", "strict-origin-when-cross-origin"],
  ["x-frame-options", "DENY"],
  ["permissions-policy", "camera=(), microphone=(), geolocation=()"],
] as const;
