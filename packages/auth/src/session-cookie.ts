const DEFAULT_SESSION_SECONDS = 60 * 60 * 12;
const DEFAULT_REMEMBER_DAYS = 27;

export const SESSION_COOKIE_NAME = process.env.NODE_ENV === "production" ? "__Host-powerchain_session" : "powerchain_session";

export function sessionCookieOptions(input?: { expires?: Date; remembered?: boolean }) {
  const rememberDays = Math.max(1, Math.min(60, Number(process.env.AUTH_REMEMBER_DAYS || DEFAULT_REMEMBER_DAYS)));
  const maxAge = input?.remembered ? rememberDays * 24 * 60 * 60 : DEFAULT_SESSION_SECONDS;
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
    ...(input?.expires ? { expires: input.expires } : {}),
  };
}

// Compatibility export for callers that need the short-lived default.
export const SESSION_COOKIE_OPTIONS = sessionCookieOptions();
export const REMEMBER_SESSION_DAYS = DEFAULT_REMEMBER_DAYS;

export function assertSessionId(value: string): string {
  if (!/^[A-Za-z0-9_-]{32,}$/.test(value)) throw new Error("Invalid session token");
  return value;
}
