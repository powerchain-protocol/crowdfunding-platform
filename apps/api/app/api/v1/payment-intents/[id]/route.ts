import { success } from "@powerchain/api-core";
import type { PaymentIntent } from "@powerchain/types";
export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const payment: PaymentIntent = { id, campaignId:"cmp_flood_2026", amount:"50.00", displayCurrency:"EUR", paymentMethod:"SEPA_INSTANT", settlementAsset:"EURe", status:"AWAITING_PAYMENT", reference:"PC-6WQ9-K2M7" };
  return Response.json(success(payment));
}
