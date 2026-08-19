import { success } from "@powerchain/api-core";
import type { ActivityEvent } from "@powerchain/realtime";
export const dynamic="force-dynamic";
export async function GET(request:Request){const campaignId=new URL(request.url).searchParams.get("campaignId")??"cmp_flood_2026";const now=new Date().toISOString();const data:ActivityEvent[]=[{id:"evt_demo_1",campaignId,kind:"CONTRIBUTION",signature:"5Xh8…nQ2",wallet:"8Yz…x1P",amountBaseUnits:"50000000",occurredAt:now},{id:"evt_demo_2",campaignId,kind:"MILESTONE_CLAIM",signature:"3Psa…wM9",occurredAt:now}];return Response.json(success(data),{headers:{"cache-control":"no-store"}})}
