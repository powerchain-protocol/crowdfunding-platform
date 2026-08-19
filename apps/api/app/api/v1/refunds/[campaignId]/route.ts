import { success } from "@powerchain/api-core";
export async function GET(_request:Request,{params}:{params:Promise<{campaignId:string}>}){const {campaignId}=await params;return Response.json(success({campaignId,policy:"PULL_BASED",instruction:"refund_single",available:false,amountBaseUnits:"0"}))}
export async function POST(){return Response.json({error:{code:"WALLET_SIGNATURE_REQUIRED",message:"refund_single must be built from authoritative on-chain state and signed by the contributor wallet.",requestId:crypto.randomUUID()}},{status:409})}
