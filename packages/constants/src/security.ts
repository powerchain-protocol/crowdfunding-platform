export const SECURITY_HEADERS = {
  requestId: "x-request-id",
  correlationId: "x-correlation-id",
  idempotencyKey: "idempotency-key",
  csrfToken: "x-csrf-token",
} as const;

export const SESSION_COOKIE = {
  development: "powerchain_session",
  production: "__Host-powerchain_session",
  sameSite: "lax",
  httpOnly: true,
} as const;

export const UPLOAD_LIMITS = {
  identityDocumentBytes: 15 * 1024 * 1024,
  milestoneEvidenceBytes: 15 * 1024 * 1024,
  pitchDeckBytes: 25 * 1024 * 1024,
} as const;
