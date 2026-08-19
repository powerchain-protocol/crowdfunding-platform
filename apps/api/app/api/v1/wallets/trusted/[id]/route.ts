import { prisma } from "@powerchain/database";
import { requireSession } from "../../../../../../lib/current-session";
import { assertSameOrigin } from "../../../../../../lib/request-security";

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    assertSameOrigin(request);
    const session = await requireSession();
    const { id } = await context.params;
    const wallet = await prisma.trustedWallet.findFirst({ where: { id, userId: session.user.id } });
    if (!wallet) return Response.json({ error: { code: "NOT_FOUND", message: "Trusted wallet not found.", requestId: crypto.randomUUID() } }, { status: 404 });
    await prisma.trustedWallet.update({ where: { id }, data: { status: "REVOKED" } });
    return Response.json({ data: { id, status: "REVOKED" }, meta: { requestId: crypto.randomUUID() } });
  } catch {
    return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required.", requestId: crypto.randomUUID() } }, { status: 401 });
  }
}
