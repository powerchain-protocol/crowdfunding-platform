import { isMockDataMode, providerRequired } from "../../../../../../lib/runtime";
import { success } from "@powerchain/api-core";
import { mockDealRoomMessages } from "../../../../../../lib/mock-capital";
export const dynamic = "force-dynamic";
export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  if (!isMockDataMode()) return providerRequired("DEAL_ROOM_REPOSITORY_REQUIRED", "Production deal-room messages require authenticated participant-scoped persistence.");
  const { id } = await context.params;
  return Response.json(success(mockDealRoomMessages.map((message)=>({...message,roomId:id}))));
}
export async function POST(){ return Response.json({error:{code:"DEAL_ROOM_PERSISTENCE_REQUIRED",message:"Deal-room writes require authenticated participant membership, encrypted storage and append-only audit persistence.",requestId:crypto.randomUUID()}},{status:501}); }
