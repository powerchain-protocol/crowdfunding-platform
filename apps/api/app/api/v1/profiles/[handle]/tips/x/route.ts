import { prisma } from "@powerchain/database";
import { createSelfReportedXTipJournal } from "@powerchain/ledger";
import { normalizeHandle } from "@powerchain/utils/helpers";
import { requireSession } from "../../../../../../../lib/current-session";
import { assertSameOrigin, readJson } from "../../../../../../../lib/request-security";
import { persistLedgerJournal } from "../../../../../../../lib/ledger";

const currencies = new Set(["USD", "EUR", "GBP"]);

export async function GET(_: Request, { params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const normalized = normalizeHandle(handle);
  const tips = await prisma.xTipRecord.findMany({ where: { xHandle: normalized }, orderBy: { createdAt: "desc" }, take: 50 });
  return Response.json({ data: { handle: normalized, xProfileUrl: `https://x.com/${encodeURIComponent(normalized)}`, tips: tips.map((tip) => ({ ...tip, amountMinor: tip.amountMinor.toString() })) }, meta: { requestId: crypto.randomUUID(), settlementAuthority: "SELF_REPORTED_ONLY" } }, { headers: { "cache-control": "no-store" } });
}

export async function POST(request: Request, { params }: { params: Promise<{ handle: string }> }) {
  const requestId = crypto.randomUUID();
  try {
    assertSameOrigin(request);
    const session = await requireSession();
    const { handle } = await params;
    const normalized = normalizeHandle(handle);
    if (!/^[a-z0-9_]{1,15}$/.test(normalized)) throw new Error("Invalid X handle.");
    const body = await readJson<{ amountMinor?: string; currency?: string; evidenceNote?: string }>(request, 8_192);
    if (!body.amountMinor || !/^\d+$/.test(body.amountMinor)) throw new Error("amountMinor must be an integer string.");
    const amountMinor = BigInt(body.amountMinor);
    if (amountMinor <= 0n || amountMinor > 100_000_000n) throw new Error("Tip amount is outside allowed limits.");
    const currency = body.currency ?? "USD";
    if (!currencies.has(currency)) throw new Error("Unsupported tip currency.");
    const identity = await prisma.authIdentity.findFirst({ where: { provider: "X", handle: normalized } });
    const xProfileUrl = `https://x.com/${encodeURIComponent(normalized)}`;
    const record = await prisma.xTipRecord.create({ data: { ...(identity ? { recipientUserId: identity.userId } : {}), senderUserId: session.user.id, xHandle: normalized, amountMinor: amountMinor.toString(), currency, externalUrl: xProfileUrl, ...(body.evidenceNote ? { evidenceNote: body.evidenceNote.slice(0, 500) } : {}) } });
    await persistLedgerJournal(createSelfReportedXTipJournal({ reference: `x-tip:${record.id}`, amountMinor, currency, creatorAccount: `creator:x:${normalized}`, sourceId: record.id, userId: session.user.id }));
    return Response.json({ data: { id: record.id, xProfileUrl, status: "SELF_REPORTED", amountMinor: amountMinor.toString(), currency }, meta: { requestId, authoritativeSettlement: false } }, { status: 201 });
  } catch (cause) {
    return Response.json({ error: { code: "TIP_RECORD_FAILED", message: cause instanceof Error ? cause.message : "Tip could not be recorded.", requestId } }, { status: 400 });
  }
}
