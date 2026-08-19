import { prisma } from "@powerchain/database";
import { TRUSTED_WALLET_KINDS } from "@powerchain/types";
import { requireSession } from "../../../../../lib/current-session";
import { isSolanaAddress } from "../../../../../lib/solana-rpc";
import { assertSameOrigin, readJson } from "../../../../../lib/request-security";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await requireSession();
    const wallets = await prisma.trustedWallet.findMany({ where: { userId: session.user.id, status: { not: "REVOKED" } }, orderBy: { createdAt: "desc" } });
    return Response.json({ data: wallets, meta: { requestId: crypto.randomUUID() } }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required.", requestId: crypto.randomUUID() } }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    const session = await requireSession();
    const body = await readJson<{ address?: string; network?: string; kind?: string; label?: string }>(request, 16_384);
    const address = body.address?.trim() ?? "";
    const network = body.network === "mainnet-beta" ? "mainnet-beta" : body.network === "devnet" ? "devnet" : null;
    const kind = body.kind && TRUSTED_WALLET_KINDS.includes(body.kind as (typeof TRUSTED_WALLET_KINDS)[number]) && body.kind !== "OPERATOR" ? body.kind : "PERSONAL";
    if (!isSolanaAddress(address) || !network) return Response.json({ error: { code: "INVALID_INPUT", message: "A valid Solana address and network are required.", requestId: crypto.randomUUID() } }, { status: 400 });
    const membership = session.user.memberships[0];
    const wallet = await prisma.trustedWallet.upsert({
      where: { userId_address_network: { userId: session.user.id, address, network } },
      create: { userId: session.user.id, ...(membership ? { organizationId: membership.organizationId } : {}), address, network, kind, ...(body.label?.trim() ? { label: body.label.trim().slice(0, 80) } : {}) },
      update: { status: "ACTIVE", kind, ...(body.label?.trim() ? { label: body.label.trim().slice(0, 80) } : {}) },
    });
    return Response.json({ data: wallet, meta: { requestId: crypto.randomUUID() } }, { status: 201 });
  } catch {
    return Response.json({ error: { code: "UNAUTHENTICATED", message: "Sign in required.", requestId: crypto.randomUUID() } }, { status: 401 });
  }
}
