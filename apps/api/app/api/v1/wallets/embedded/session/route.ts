import { createConfiguredEmbeddedWalletProvider } from "@powerchain/providers/embedded-wallets";
import { requireSession } from "../../../../../../lib/current-session";
import { allowedOrigins, assertSameOrigin, readJson } from "../../../../../../lib/request-security";

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    const session = await requireSession();
    const body = await readJson<{ network?: string; returnUrl?: string }>(request, 8_192);
    const network = body.network === "mainnet-beta" ? "mainnet-beta" : "devnet";
    const returnUrl = body.returnUrl?.trim();
    if (!returnUrl) return Response.json({ error: { code: "INVALID_INPUT", message: "returnUrl is required.", requestId: crypto.randomUUID() } }, { status: 400 });
    const parsed = new URL(returnUrl);
    if (!/^https?:$/.test(parsed.protocol) || !allowedOrigins().includes(parsed.origin)) return Response.json({ error: { code: "INVALID_RETURN_URL", message: "Return URL must use a configured PowerChain application origin.", requestId: crypto.randomUUID() } }, { status: 400 });
    const provider = createConfiguredEmbeddedWalletProvider();
    if (!provider) return Response.json({ error: { code: "EMBEDDED_WALLET_DISABLED", message: "Embedded wallet provider is not configured.", requestId: crypto.randomUUID() } }, { status: 503 });
    const data = await provider.createSession({ userId: session.user.id, network, returnUrl: parsed.toString() });
    return Response.json({ data, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required.", requestId: crypto.randomUUID() } }, { status: 401 });
  }
}
