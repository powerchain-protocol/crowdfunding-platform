import { prisma } from "@powerchain/database";
import { createCapitalContributionJournal } from "@powerchain/ledger";
import { getStripeClient } from "../../../../../lib/stripe";
import { persistLedgerJournal } from "../../../../../lib/ledger";

export const runtime = "nodejs";
export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!signature || !secret) return new Response("Stripe webhook is not configured.", { status: 503 });
  const payload = await request.text();
  let event;
  try { event = getStripeClient().webhooks.constructEvent(payload, signature, secret); }
  catch { return new Response("Invalid Stripe signature.", { status: 400 }); }
  if (event.type === "checkout.session.completed") {
    const checkout = event.data.object;
    const contributionId = checkout.metadata?.powerchainContributionId;
    const potId = checkout.metadata?.powerchainPotId;
    if (!contributionId || !potId || checkout.payment_status !== "paid") return new Response("ok", { status: 200 });
    const contribution = await prisma.capitalContribution.findUnique({ where: { id: contributionId } });
    const pot = await prisma.capitalPot.findUnique({ where: { id: potId } });
    if (!contribution || !pot) return new Response("Unknown contribution.", { status: 200 });
    if (contribution.status !== "CONFIRMED") {
      await prisma.$transaction(async (tx) => {
        const updated = await tx.capitalContribution.updateMany({ where: { id: contribution.id, status: "PREPARED" }, data: { status: "CONFIRMED", ...(typeof checkout.payment_intent === "string" ? { providerPaymentId: checkout.payment_intent } : {}), confirmedAt: new Date() } });
        if (updated.count === 1) await tx.capitalPot.update({ where: { id: pot.id }, data: { raisedMinor: { increment: contribution.amountMinor } } });
      });
      const journal = createCapitalContributionJournal({ reference: `stripe:${checkout.id}`, amountMinor: BigInt(contribution.amountMinor.toString()), platformFeeMinor: BigInt(contribution.platformFeeMinor?.toString() ?? "0"), currency: contribution.currency, potAccount: `capital-pot:${pot.id}`, sourceId: checkout.id, ...(contribution.userId ? { userId: contribution.userId } : {}) });
      await persistLedgerJournal(journal);
    }
  }
  return new Response("ok", { status: 200 });
}
