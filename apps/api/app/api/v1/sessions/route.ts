import { prisma } from "@powerchain/database";
import { requireSession } from "../../../../lib/current-session";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const session = await requireSession();
    const rows = await prisma.session.findMany({ where: { userId: session.user.id, revokedAt: null, expiresAt: { gt: new Date() } }, orderBy: { lastSeenAt: "desc" }, select: { id: true, remembered: true, createdAt: true, lastSeenAt: true, expiresAt: true, ipHash: true, userAgentHash: true } });
    return Response.json({ data: rows.map((row) => ({ id: row.id, current: row.id === session.id, remembered: row.remembered, createdAt: row.createdAt, lastSeenAt: row.lastSeenAt, expiresAt: row.expiresAt, securityFingerprintStored: Boolean(row.ipHash || row.userAgentHash) })), meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
  } catch { return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required." } }, { status: 401 }); }
}
