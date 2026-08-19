import { requireVerifiedProgram, type SolanaProgramReference } from "@powerchain/contracts/solana";
import { isValidIpfsProofUri } from "@powerchain/proofs";

function milestoneEscrowProgram(): SolanaProgramReference {
  return {
    key: "milestone-escrow",
    programId: process.env.SOLANA_MILESTONE_ESCROW_PROGRAM_ID?.trim() || null,
    cluster: process.env.POWERCHAIN_NETWORK === "mainnet" ? "mainnet-beta" : "devnet",
    verified: process.env.SOLANA_MILESTONE_ESCROW_VERIFIED === "true",
  };
}

export async function POST(request: Request, { params }: { params: Promise<{ campaignId: string; milestoneId: string }> }) {
  const { campaignId, milestoneId } = await params;
  const input = await request.json().catch(() => null) as { proofUri?: string; proofHash?: string } | null;
  if (!input?.proofUri || !isValidIpfsProofUri(input.proofUri) || !input.proofHash || !/^[a-f0-9]{64}$/i.test(input.proofHash)) {
    return Response.json({ error: { code: "MILESTONE_PROOF_INVALID", message: "claim_milestone requires a valid ipfs:// proof URI and a SHA-256 proof commitment.", requestId: crypto.randomUUID() } }, { status: 400 });
  }

  try {
    requireVerifiedProgram(milestoneEscrowProgram());
  } catch (error) {
    return Response.json({
      error: {
        code: "SOLANA_PROGRAM_NOT_VERIFIED",
        message: error instanceof Error ? error.message : "Milestone escrow deployment is not verified.",
        requestId: crypto.randomUUID(),
        details: { campaignId, milestoneId },
      },
    }, { status: 503 });
  }

  return Response.json({
    error: {
      code: "SIGNED_TRANSACTION_REQUIRED",
      message: "The server may prepare and verify the claim instruction, but the campaign owner must authorize the Solana transaction in a wallet. Automatic signing is disabled.",
      requestId: crypto.randomUUID(),
    },
  }, { status: 409 });
}
