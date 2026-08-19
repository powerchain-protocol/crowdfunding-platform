import { prisma } from "@powerchain/database";

export const dynamic = "force-dynamic";
export async function GET(_: Request, { params }: { params: Promise<{ potId: string }> }) {
  const { potId } = await params;
  const pot = await prisma.capitalPot.findUnique({ where: { id: potId } });
  if (!pot) return Response.json({ error: { code: "NOT_FOUND", message: "Capital pot not found.", requestId: crypto.randomUUID() } }, { status: 404 });
  return Response.json({ data: { ...pot, targetMinor: pot.targetMinor.toString(), raisedMinor: pot.raisedMinor.toString() }, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
}
