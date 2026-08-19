import { NextResponse } from "next/server";
import { buildAuthorizationUrl, createPkce, oauthCookieName, oauthCookieOptions, safeReturnTo } from "../../../../../../../lib/oauth";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    const { state, verifier, challenge } = createPkce();
    const requestUrl = new URL(request.url);
    const returnTo = safeReturnTo(requestUrl.searchParams.get("returnTo"));
    const remembered = requestUrl.searchParams.get("remember") === "1";
    const response = NextResponse.redirect(buildAuthorizationUrl("google", state, challenge));
    response.cookies.set(oauthCookieName("google"), JSON.stringify({ state, verifier, returnTo, remembered }), oauthCookieOptions());
    return response;
  } catch (error) {
    return NextResponse.json({ error: { code: "OAUTH_NOT_CONFIGURED", message: error instanceof Error ? error.message : "OAuth is not configured." } }, { status: 503 });
  }
}
