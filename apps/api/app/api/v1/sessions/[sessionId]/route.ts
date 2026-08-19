import { prisma } from "@powerchain/database";
import { requireSession } from "../../../../../lib/current-session";
import { assertSameOrigin } from "../../../../../lib/request-security";
export async function DELETE(request: Request, { params }: { params: Promise<{ sessionId: string }> }) {
  try {
    assertSameOrigin(request); const current = await requireSession(); const { sessionId } = await params;
    const result = await prisma.session.updateMany({ where: { id: sessionId, userId: current.user.id, revokedAt: null }, data: { revokedAt: new Date() } });
    if (!result.count) return Response.json({ error: { code: "SESSION_NOT_FOUND", message: "Session was not found." } }, { status: 404 });
    return Response.json({ data: { revoked: true, current: sessionId === current.id }, meta: { requestId: crypto.randomUUID() } });
  } catch { return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required." } }, { status: 401 }); }
}
