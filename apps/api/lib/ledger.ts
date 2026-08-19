import { prisma } from "@powerchain/database";
import { assertBalanced, type LedgerJournalDraft } from "@powerchain/ledger";

export async function persistLedgerJournal(draft: LedgerJournalDraft) {
  assertBalanced(draft.entries);
  return prisma.$transaction(async (tx) => {
    const existing = await tx.ledgerJournal.findUnique({ where: { reference: draft.reference }, include: { postings: true } });
    if (existing) return existing;
    return tx.ledgerJournal.create({
      data: {
        reference: draft.reference,
        type: draft.type,
        source: draft.source,
        ...(draft.sourceId ? { sourceId: draft.sourceId } : {}),
        ...(draft.userId ? { userId: draft.userId } : {}),
        ...(draft.metadata ? { metadata: draft.metadata } : {}),
        postings: {
          create: draft.entries.map((entry) => ({
            account: entry.account,
            direction: entry.direction,
            amountMinor: entry.amountMinor.toString(),
            asset: entry.asset,
          })),
        },
      },
      include: { postings: true },
    });
  });
}
