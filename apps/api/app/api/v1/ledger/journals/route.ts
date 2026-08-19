import { prisma } from "@powerchain/database";
import { requireSession } from "../../../../../lib/current-session";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    const session = await requireSession();
    const url = new URL(request.url);
    const take = Math.min(Math.max(Number(url.searchParams.get("limit") ?? 50), 1), 100);
    const rows = await prisma.ledgerJournal.findMany({ where: { userId: session.user.id }, include: { postings: true }, orderBy: { createdAt: "desc" }, take });
    return Response.json({ data: rows.map((row) => ({ ...row, postings: row.postings.map((posting) => ({ ...posting, amountMinor: posting.amountMinor.toString() })) })), meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required.", requestId: crypto.randomUUID() } }, { status: 401 });
  }
}
