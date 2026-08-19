import { prisma } from "@powerchain/database";
import { getPlan } from "@powerchain/saas";
import { requireSession } from "../../../../../lib/current-session";
export const dynamic="force-dynamic";
export async function GET(){try{const session=await requireSession();const membership=session.user.memberships[0];if(!membership)return Response.json({error:{code:"NO_ORGANIZATION",message:"No active organization membership.",requestId:crypto.randomUUID()}},{status:403});const subscription=await prisma.saaSSubscription.findFirst({where:{organizationId:membership.organizationId},orderBy:{createdAt:"desc"}});return Response.json({data:subscription?{...subscription,plan:getPlan(subscription.planCode)}:null,meta:{requestId:crypto.randomUUID()}},{headers:{"cache-control":"no-store"}})}catch{return Response.json({error:{code:"UNAUTHENTICATED",message:"Sign in required.",requestId:crypto.randomUUID()}},{status:401})}}
