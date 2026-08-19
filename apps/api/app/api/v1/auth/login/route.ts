import { NextResponse } from "next/server";
import { authenticateUser, createSession } from "@powerchain/auth/server";
import { SESSION_COOKIE_NAME, sessionCookieOptions } from "@powerchain/auth";
import { assertSameOrigin, readJson } from "../../../../../lib/request-security";

function clientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || undefined;
}

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    const body = await readJson<{ email?: string; password?: string; rememberMe?: boolean }>(request);
    if (!body.email || !body.password) return NextResponse.json({ error: { code: "VALIDATION_ERROR", message: "Email and password are required.", requestId: crypto.randomUUID() } }, { status: 400 });
    const user = await authenticateUser(body.email, body.password);
    if (!user) return NextResponse.json({ error: { code: "INVALID_CREDENTIALS", message: "Email or password is incorrect.", requestId: crypto.randomUUID() } }, { status: 401 });
    const ip = clientIp(request);
    const userAgent = request.headers.get("user-agent") || undefined;
    const session = await createSession(user.id, {
      remembered: body.rememberMe === true,
      ...(ip ? { ip } : {}),
      ...(userAgent ? { userAgent } : {}),
    });
    const res = NextResponse.json({ data: { user: { id: user.id, email: user.email, displayName: user.displayName, primaryRole: user.primaryRole }, remembered: session.remembered }, meta: { requestId: crypto.randomUUID() } });
    res.cookies.set(SESSION_COOKIE_NAME, session.token, sessionCookieOptions({ expires: session.expiresAt, remembered: session.remembered }));
    return res;
  } catch (error) {
    return NextResponse.json({ error: { code: "LOGIN_FAILED", message: error instanceof Error ? error.message : "Login failed", requestId: crypto.randomUUID() } }, { status: 400 });
  }
}
