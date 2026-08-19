import { prisma } from "@powerchain/database";
import { requireSession } from "../../../../../lib/current-session";
import { assertSameOrigin, readJson } from "../../../../../lib/request-security";

export const dynamic = "force-dynamic";
const currencies = new Set(["USD", "EUR", "GBP"]);
const networks = new Set(["devnet", "mainnet-beta"]);
const themes = new Set(["light", "dark", "system"]);
const locales = new Set(["en", "es"]);

export async function GET() {
  try {
    const session = await requireSession();
    if (body.theme !== undefined) { if (!themes.has(body.theme)) return Response.json({ error: { code: "INVALID_THEME", message: "Unsupported theme.", requestId: crypto.randomUUID() } }, { status: 400 }); data.theme = body.theme; }
    if (body.locale !== undefined) { if (!locales.has(body.locale)) return Response.json({ error: { code: "INVALID_LOCALE", message: "Unsupported locale.", requestId: crypto.randomUUID() } }, { status: 400 }); data.locale = body.locale; }
    const preference = await prisma.userPreference.upsert({ where: { userId: session.user.id }, create: { userId: session.user.id }, update: {} });
    return Response.json({ data: preference, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required.", requestId: crypto.randomUUID() } }, { status: 401 });
  }
}

export async function PATCH(request: Request) {
  try {
    assertSameOrigin(request);
    const session = await requireSession();
    const body = await readJson<{ defaultCurrency?: string; solanaNetwork?: string; theme?: string; locale?: string }>(request, 8_192);
    const data: { defaultCurrency?: string; solanaNetwork?: string; theme?: string; locale?: string } = {};
    if (body.defaultCurrency !== undefined) {
      if (!currencies.has(body.defaultCurrency)) return Response.json({ error: { code: "INVALID_CURRENCY", message: "Unsupported display currency.", requestId: crypto.randomUUID() } }, { status: 400 });
      data.defaultCurrency = body.defaultCurrency;
    }
    if (body.solanaNetwork !== undefined) {
      if (!networks.has(body.solanaNetwork)) return Response.json({ error: { code: "INVALID_NETWORK", message: "Unsupported Solana network.", requestId: crypto.randomUUID() } }, { status: 400 });
      data.solanaNetwork = body.solanaNetwork;
    }
    if (body.theme !== undefined) { if (!themes.has(body.theme)) return Response.json({ error: { code: "INVALID_THEME", message: "Unsupported theme.", requestId: crypto.randomUUID() } }, { status: 400 }); data.theme = body.theme; }
    if (body.locale !== undefined) { if (!locales.has(body.locale)) return Response.json({ error: { code: "INVALID_LOCALE", message: "Unsupported locale.", requestId: crypto.randomUUID() } }, { status: 400 }); data.locale = body.locale; }
    const preference = await prisma.userPreference.upsert({ where: { userId: session.user.id }, create: { userId: session.user.id, ...data }, update: data });
    return Response.json({ data: preference, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required.", requestId: crypto.randomUUID() } }, { status: 401 });
  }
}
