import { NextResponse } from "next/server";
import { registerUser, createSession } from "@powerchain/auth/server";
import { SESSION_COOKIE_NAME, sessionCookieOptions } from "@powerchain/auth";
import { assertSameOrigin, readJson } from "../../../../../lib/request-security";

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    const body = await readJson<{ email?: string; password?: string; displayName?: string; organizationName?: string }>(request);
    if (!body.email || !body.password) return NextResponse.json({ error: { code: "VALIDATION_ERROR", message: "Email and password are required.", requestId: crypto.randomUUID() } }, { status: 400 });
    const created = await registerUser({ email: body.email, password: body.password, ...(body.displayName ? { displayName: body.displayName } : {}), ...(body.organizationName ? { organizationName: body.organizationName } : {}) });
    const session = await createSession(created.user.id);
    const res = NextResponse.json({ data: { user: { id: created.user.id, email: created.user.email, displayName: created.user.displayName, primaryRole: created.user.primaryRole }, organization: { id: created.organization.id, name: created.organization.name, slug: created.organization.slug } }, meta: { requestId: crypto.randomUUID() } }, { status: 201 });
    res.cookies.set(SESSION_COOKIE_NAME, session.token, sessionCookieOptions({ expires: session.expiresAt }));
    return res;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Registration failed";
    const duplicate = message.includes("Unique constraint");
    return NextResponse.json({ error: { code: duplicate ? "ACCOUNT_EXISTS" : "REGISTRATION_FAILED", message: duplicate ? "An account already exists for this email." : message, requestId: crypto.randomUUID() } }, { status: duplicate ? 409 : 400 });
  }
}
