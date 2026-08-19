import { success } from "@powerchain/api-core"; import { demoLeaderboard } from "@powerchain/data";
export const dynamic="force-dynamic";
export async function GET(_request:Request,{params}:{params:Promise<{campaignId:string}>}){const {campaignId}=await params;return Response.json(success({...demoLeaderboard,campaignId}),{headers:{"cache-control":"no-store"}})}
