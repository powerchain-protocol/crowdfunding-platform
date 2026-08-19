import { prisma } from "@powerchain/database";
import { requireSession } from "../../../../../lib/current-session";

export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const session = await requireSession();
    const operator = await prisma.operatorProfile.findUnique({ where: { userId: session.user.id } });
    return Response.json({ data: operator, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required.", requestId: crypto.randomUUID() } }, { status: 401 });
  }
}
