import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: { params: Promise<{ campaignId: string; milestoneId: string }> }) {
  const { campaignId, milestoneId } = await params;
  return NextResponse.json({ data: [], meta: { requestId: crypto.randomUUID(), campaignId, milestoneId } });
}

export async function POST(request: Request, { params }: { params: Promise<{ campaignId: string; milestoneId: string }> }) {
  const { campaignId, milestoneId } = await params;
  const body = await request.json().catch(() => null) as { fileName?: string; sha256?: string; kind?: string } | null;
  if (!body?.fileName || !body.kind || !body.sha256 || !/^[a-f0-9]{64}$/i.test(body.sha256)) {
    return NextResponse.json({ error: { code: "INVALID_EVIDENCE_METADATA", message: "Evidence metadata must include fileName, kind and a SHA-256 commitment.", requestId: crypto.randomUUID() } }, { status: 400 });
  }
  return NextResponse.json({ error: { code: "EVIDENCE_STORAGE_NOT_CONFIGURED", message: `Evidence persistence for ${campaignId}/${milestoneId} is unavailable until authenticated object storage and audit persistence are configured.`, requestId: crypto.randomUUID() } }, { status: 501 });
}
