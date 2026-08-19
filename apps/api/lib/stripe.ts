import Stripe from "stripe";

let client: Stripe | null = null;
export function getStripeClient(): Stripe {
  const secret = process.env.STRIPE_SECRET_KEY?.trim();
  if (!secret) throw new Error("Stripe is not configured. Set STRIPE_SECRET_KEY on the server.");
  client ??= new Stripe(secret, { telemetry: false, maxNetworkRetries: 2 });
  return client;
}

export function stripeMode(): "disabled" | "test" | "live" {
  const mode = (process.env.STRIPE_MODE ?? "disabled").toLowerCase();
  return mode === "live" ? "live" : mode === "test" ? "test" : "disabled";
}

export function assertStripeMode() {
  const mode = stripeMode();
  if (mode === "disabled") throw new Error("Stripe Checkout is disabled.");
  const key = process.env.STRIPE_SECRET_KEY ?? "";
  if (mode === "live" && !key.startsWith("sk_live_")) throw new Error("STRIPE_MODE=live requires a live Stripe secret key.");
  if (mode === "test" && !key.startsWith("sk_test_")) throw new Error("STRIPE_MODE=test requires a test Stripe secret key.");
  return mode;
}
