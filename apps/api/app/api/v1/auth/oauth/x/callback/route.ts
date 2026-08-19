import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSession, upsertOAuthUser } from "@powerchain/auth/server";
import { SESSION_COOKIE_NAME, sessionCookieOptions } from "@powerchain/auth";
import { exchangeOAuthCode, oauthCookieName, oauthCookieOptions, type OAuthCookieState } from "../../../../../../../lib/oauth";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const url = new URL(request.url); const code = url.searchParams.get("code"); const state = url.searchParams.get("state");
  const jar = await cookies();
  const cookieValue = jar.get(oauthCookieName("x"))?.value;
  try {
    if (!code || !state || !cookieValue) throw new Error("OAuth callback is incomplete or expired.");
    const saved = JSON.parse(cookieValue) as OAuthCookieState;
    if (saved.state !== state) throw new Error("OAuth state validation failed.");
    const identity = await exchangeOAuthCode("x", code, saved.verifier);
    const user = await upsertOAuthUser(identity);
    const userAgent = request.headers.get("user-agent") || undefined;
    const session = await createSession(user.id, {
      remembered: saved.remembered,
      ...(userAgent ? { userAgent } : {}),
    });
    const response = NextResponse.redirect(saved.returnTo);
    response.cookies.set(SESSION_COOKIE_NAME, session.token, sessionCookieOptions({ expires: session.expiresAt, remembered: session.remembered }));
    response.cookies.set(oauthCookieName("x"), "", { ...oauthCookieOptions(), maxAge: 0 });
    return response;
  } catch (error) {
    const target = new URL(process.env.AUTH_APP_URL || "http://localhost:3000");
    target.pathname = "/auth/login"; target.searchParams.set("error", error instanceof Error ? error.message : "OAuth sign-in failed.");
    const response = NextResponse.redirect(target);
    response.cookies.set(oauthCookieName("x"), "", { ...oauthCookieOptions(), maxAge: 0 });
    return response;
  }
}
