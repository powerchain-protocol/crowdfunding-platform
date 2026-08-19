import { NextResponse } from "next/server";
export async function POST(_request: Request, { params }: { params: Promise<{ campaignId: string; milestoneId: string; evidenceId: string }> }) {
  const { campaignId, milestoneId, evidenceId } = await params;
  return NextResponse.json({ error: { code: "EVIDENCE_REVIEW_NOT_CONFIGURED", message: `Verification for evidence ${evidenceId} on ${campaignId}/${milestoneId} requires an authenticated reviewer, persistent audit event and configured evidence service.`, requestId: crypto.randomUUID() } }, { status: 501 });
}
