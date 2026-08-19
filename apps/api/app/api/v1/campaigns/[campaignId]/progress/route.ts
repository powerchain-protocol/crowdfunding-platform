import { success } from "@powerchain/api-core";
export async function GET(_request: Request, { params }: { params: Promise<{ campaignId: string }> }) {
  const { campaignId } = await params;
  return Response.json(success({ campaignId, goalBaseUnits: "250000000000", fundedBaseUnits: "147200000000", percent: 58.88, contributorCount: 284, recognitionState: "RECONCILED", deadline: "2026-09-30T20:00:00Z" }));
}
