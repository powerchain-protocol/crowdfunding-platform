import { SAAS_PLANS } from "@powerchain/saas";
export async function GET(){return Response.json({data:SAAS_PLANS,meta:{requestId:crypto.randomUUID()}})}
