import { prisma } from "@powerchain/database";
import { currentSession } from "../../../../../../lib/current-session";
import { assertSameOrigin, readJson } from "../../../../../../lib/request-security";
import { assertStripeMode, getStripeClient } from "../../../../../../lib/stripe";
import { basisPoints } from "@powerchain/utils/helpers";

const ALLOWED_CURRENCIES = new Set(["USD", "EUR", "GBP"]);
const MIN_MINOR = 100n;
const MAX_MINOR = 100_000_000n;

export async function POST(request: Request, { params }: { params: Promise<{ potId: string }> }) {
  const requestId = crypto.randomUUID();
  try {
    assertSameOrigin(request);
    assertStripeMode();
    const { potId } = await params;
    const body = await readJson<{ amountMinor?: string; successUrl?: string; cancelUrl?: string }>(request, 8_192);
    if (!body.amountMinor || !/^\d+$/.test(body.amountMinor)) throw new Error("amountMinor must be a positive integer string.");
    const amountMinor = BigInt(body.amountMinor);
    if (amountMinor < MIN_MINOR || amountMinor > MAX_MINOR) throw new Error("Contribution amount is outside allowed limits.");
    const pot = await prisma.capitalPot.findUnique({ where: { id: potId } });
    if (!pot || pot.status !== "OPEN") return Response.json({ error: { code: "POT_UNAVAILABLE", message: "This capital pot is not open.", requestId } }, { status: 409 });
    if (!ALLOWED_CURRENCIES.has(pot.currency)) throw new Error("Unsupported capital-pot currency.");
    const platformFeeMinor = basisPoints(amountMinor, pot.platformFeeBps);
    const session = await currentSession();
    const contribution = await prisma.capitalContribution.create({ data: {
      potId: pot.id,
      ...(session ? { userId: session.user.id } : {}),
      amountMinor: amountMinor.toString(), currency: pot.currency, provider: "STRIPE", status: "PREPARED", platformFeeMinor: platformFeeMinor.toString(),
    }});
    const webOrigin = process.env.NEXT_PUBLIC_WEB_URL ?? "http://localhost:3000";
    const allowedOrigins = new Set([webOrigin, process.env.NEXT_PUBLIC_CROWDFUNDING_URL ?? "http://localhost:3001", process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:3004"]);
    const safeReturn = (candidate: string | undefined, fallback: string) => {
      if (!candidate) return fallback;
      const url = new URL(candidate);
      if (!allowedOrigins.has(url.origin)) throw new Error("Return URL origin is not allowed.");
      return url.toString();
    };
    const stripe = getStripeClient();
    const checkout = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_creation: "if_required",
      success_url: safeReturn(body.successUrl, `${webOrigin}/payments/stripe/success?session_id={CHECKOUT_SESSION_ID}`),
      cancel_url: safeReturn(body.cancelUrl, `${webOrigin}/payments/stripe/cancelled`),
      line_items: [{ quantity: 1, price_data: { currency: pot.currency.toLowerCase(), unit_amount: Number(amountMinor), product_data: { name: pot.title, description: "PowerChain project capital contribution" } } }],
      metadata: { powerchainContributionId: contribution.id, powerchainPotId: pot.id, platformFeeMinor: platformFeeMinor.toString() },
      payment_intent_data: { metadata: { powerchainContributionId: contribution.id, powerchainPotId: pot.id } },
    }, { idempotencyKey: `pc_capital_${contribution.id}` });
    await prisma.capitalContribution.update({ where: { id: contribution.id }, data: { providerSessionId: checkout.id } });
    if (!checkout.url) throw new Error("Stripe did not return a hosted Checkout URL.");
    return Response.json({ data: { contributionId: contribution.id, checkoutUrl: checkout.url, amountMinor: amountMinor.toString(), platformFeeMinor: platformFeeMinor.toString(), currency: pot.currency, status: "PREPARED" }, meta: { requestId } }, { status: 201 });
  } catch (cause) {
    return Response.json({ error: { code: "CHECKOUT_FAILED", message: cause instanceof Error ? cause.message : "Checkout could not be prepared.", requestId } }, { status: 400 });
  }
}
