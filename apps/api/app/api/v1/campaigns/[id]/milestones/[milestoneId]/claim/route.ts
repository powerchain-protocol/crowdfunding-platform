import { isValidIpfsProofUri } from "@powerchain/proofs";
export async function POST(request: Request, context: { params: Promise<{ id: string; milestoneId: string }> }) {
  const { id, milestoneId } = await context.params;
  let input: { ipfsUri?: string; proofSha256?: string } = {};
  try { input = await request.json() as typeof input; } catch { /* validation below */ }
  if (!input.ipfsUri || !isValidIpfsProofUri(input.ipfsUri) || !input.proofSha256) {
    return Response.json({error:{code:"MILESTONE_PROOF_INVALID",message:"claim_milestone requires a valid ipfs:// proof URI and SHA-256 commitment.",requestId:crypto.randomUUID()}},{status:400});
  }
  if (!process.env.SOLANA_MILESTONE_ESCROW_PROGRAM_ID) {
    return Response.json({error:{code:"SOLANA_PROGRAM_NOT_CONFIGURED",message:"Milestone claim preparation is disabled until the verified milestone-escrow program deployment is configured.",requestId:crypto.randomUUID(),details:{campaignId:id,milestoneId}}},{status:501});
  }
  return Response.json({error:{code:"SIGNED_TRANSACTION_REQUIRED",message:"The server may prepare/verify the claim instruction, but the campaign owner must authorize the Solana transaction in a wallet. Automatic signing is disabled.",requestId:crypto.randomUUID()}},{status:501});
}
