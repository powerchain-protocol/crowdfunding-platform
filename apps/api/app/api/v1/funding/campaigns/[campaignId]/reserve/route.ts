import {success} from "@powerchain/api-core";
export async function GET(_request:Request,{params}:{params:Promise<{campaignId:string}>}){const {campaignId}=await params;return Response.json(success({id:`reserve_${campaignId}`,campaignId,mint:"configured-at-runtime",vault:"configured-at-runtime",balanceBaseUnits:"25000000000",reservedBaseUnits:"10000000000",status:"FUNDED"}))}
