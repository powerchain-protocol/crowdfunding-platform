export class PowerChainError extends Error {
  readonly code: string;
  readonly status: number;
  readonly details: Readonly<Record<string, unknown>> | undefined;

  constructor(code: string, message: string, options: { status?: number; cause?: unknown; details?: Readonly<Record<string, unknown>> } = {}) {
    super(message, { cause: options.cause });
    this.name = "PowerChainError";
    this.code = code;
    this.status = options.status ?? 500;
    this.details = options.details;
  }
}

export function invariant(condition: unknown, message: string, code = "INVARIANT_VIOLATION"): asserts condition {
  if (!condition) throw new PowerChainError(code, message, { status: 500 });
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Unknown error";
}
