export type PowerChainErrorCode =
  | "BAD_REQUEST" | "UNAUTHENTICATED" | "FORBIDDEN" | "NOT_FOUND"
  | "CONFLICT" | "RATE_LIMITED" | "PROVIDER_UNAVAILABLE" | "INVARIANT_FAILED";

export class PowerChainError extends Error {
  readonly code: PowerChainErrorCode;
  readonly status: number;
  readonly details?: Record<string, unknown>;
  constructor(code: PowerChainErrorCode, message: string, status = 400, details?: Record<string, unknown>) {
    super(message);
    this.name = "PowerChainError";
    this.code = code;
    this.status = status;
    if (details !== undefined) this.details = details;
  }
}

export function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) throw new PowerChainError("INVARIANT_FAILED", message, 500);
}

export function publicError(cause: unknown, requestId: string) {
  if (cause instanceof PowerChainError) {
    return { status: cause.status, body: { error: { code: cause.code, message: cause.message, requestId } } };
  }
  return { status: 500, body: { error: { code: "INTERNAL_ERROR", message: "The request could not be completed.", requestId } } };
}
