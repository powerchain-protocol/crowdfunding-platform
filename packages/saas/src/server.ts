import { prisma } from "@powerchain/database";
import { getPlan, hasEntitlement, type SaaSEntitlement } from "./index";

export async function getActiveSubscription(organizationId:string){
  const now=new Date();
  return prisma.saaSSubscription.findFirst({where:{organizationId,status:{in:["TRIALING","ACTIVE"]},currentPeriodEnd:{gt:now}},orderBy:{createdAt:"desc"}});
}
export async function requireEntitlement(organizationId:string, entitlement:SaaSEntitlement){
  if(process.env.SAAS_ENFORCE_ENTITLEMENTS==="false") return {subscription:null,plan:null};
  const subscription=await getActiveSubscription(organizationId); if(!subscription) throw new Error("SUBSCRIPTION_REQUIRED");
  const plan=getPlan(subscription.planCode); if(!plan||!hasEntitlement(subscription.planCode,entitlement)) throw new Error("ENTITLEMENT_REQUIRED");
  return {subscription,plan};
}
export async function recordUsage(input:{organizationId:string;userId?:string;metric:string;quantity?:number;idempotencyKey:string;metadata?:Record<string,unknown>}){
  return prisma.usageEvent.upsert({where:{idempotencyKey:input.idempotencyKey},update:{},create:{organizationId:input.organizationId,metric:input.metric,quantity:input.quantity??1,idempotencyKey:input.idempotencyKey,...(input.userId?{userId:input.userId}:{}),...(input.metadata?{metadata:input.metadata}:{})}})
}
