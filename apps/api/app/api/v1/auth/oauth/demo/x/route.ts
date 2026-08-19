import { NextResponse } from "next/server";
import { createSession, upsertOAuthUser } from "@powerchain/auth/server";
import { SESSION_COOKIE_NAME, sessionCookieOptions } from "@powerchain/auth";
import { safeReturnTo } from "../../../../../../../lib/oauth";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production" || process.env.POWERCHAIN_ENV === "production" || process.env.ENABLE_DEMO_AUTH !== "true") {
    return NextResponse.json({ error: { code: "DEMO_AUTH_DISABLED", message: "Demo authentication is disabled." } }, { status: 404 });
  }
  const handle = new URL(request.url).searchParams.get("handle")?.replace(/^@/, "").slice(0, 15) || "powerchain_demo";
  const user = await upsertOAuthUser({ provider: "DEMO_X", providerSubject: handle.toLowerCase(), handle, displayName: `@${handle}`, primaryRole: "DEMO" });
  const session = await createSession(user.id, { remembered: false });
  const response = NextResponse.redirect(safeReturnTo(new URL(request.url).searchParams.get("returnTo")));
  response.cookies.set(SESSION_COOKIE_NAME, session.token, sessionCookieOptions({ expires: session.expiresAt }));
  return response;
}
