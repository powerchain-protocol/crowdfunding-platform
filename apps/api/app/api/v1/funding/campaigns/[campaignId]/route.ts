import { success } from "@powerchain/api-core";
export async function GET(_request:Request,{params}:{params:Promise<{campaignId:string}>}){const {campaignId}=await params;return Response.json(success({campaignId,goalBaseUnits:"250000000000",fundedBaseUnits:"147200000000",asset:"EURe",status:"OPEN",recognitionState:"RECONCILED"}))}
