import { PrismaClient } from "@prisma/client";
import { randomBytes, scrypt as scryptCallback } from "node:crypto";
import { promisify } from "node:util";
const prisma=new PrismaClient();const scrypt=promisify(scryptCallback);
async function passwordHash(password:string){const salt=randomBytes(16);const key=await scrypt(password,salt,64) as Buffer;return `scrypt$${salt.toString("base64url")}$${key.toString("base64url")}`}
async function user(email:string,name:string,role:string){return prisma.user.upsert({where:{email},update:{primaryRole:role},create:{email,passwordHash:await passwordHash("PowerChainLocal123"),displayName:name,primaryRole:role}})}
async function main(){
  if(process.env.NODE_ENV==="production"||process.env.POWERCHAIN_ENV==="production")throw new Error("Demo seed is blocked in production.");
  if(process.env.SEED_DEMO_USERS!=="true"){console.log("SEED_DEMO_USERS is not true; no demo users or demo capital pots were created.");return;}
  const creator=await user("creator@powerchain.local","PowerChain Creator","CREATOR");
  const demo=await user("demo@powerchain.local","PowerChain Demo","DEMO");
  let org=await prisma.organization.findFirst({where:{slug:"powerchain-demo"}});if(!org)org=await prisma.organization.create({data:{slug:"powerchain-demo",name:"PowerChain Demo"}});
  for(const row of [creator,demo])await prisma.organizationMembership.upsert({where:{userId_organizationId:{userId:row.id,organizationId:org.id}},update:{role:row.id===creator.id?"OWNER":"DEMO",status:"ACTIVE"},create:{userId:row.id,organizationId:org.id,role:row.id===creator.id?"OWNER":"DEMO"}});
  await prisma.userPreference.upsert({where:{userId:creator.id},update:{defaultCurrency:"USD",solanaNetwork:"devnet"},create:{userId:creator.id,defaultCurrency:"USD",solanaNetwork:"devnet"}});
  const existing=await prisma.saaSSubscription.findFirst({where:{organizationId:org.id}});if(!existing){const start=new Date(),end=new Date(start.getTime()+14*86400000);await prisma.saaSSubscription.create({data:{organizationId:org.id,planCode:"GROWTH",status:"TRIALING",currentPeriodStart:start,currentPeriodEnd:end}})}
  const campaigns=[{id:"cmp_flood_2026",slug:"flood-emergency-response",title:"Flood Emergency Response",summary:"Emergency response campaign with transparent milestone funding.",region:"Northern Europe",purpose:"DISASTER_RELIEF",participation:"ATTESTATION",target:"250000",raised:"147200"},{id:"cmp_medical_2026",slug:"mobile-medical-clinics",title:"Mobile Medical Clinics",summary:"Mobile healthcare delivery for underserved communities.",region:"Regional program",purpose:"HUMANITARIAN",participation:"CONTRIBUTION",target:"120000",raised:"84200"}];
  for(const c of campaigns)await prisma.campaign.upsert({where:{slug:c.slug},update:{},create:{organizationId:org.id,ownerUserId:creator.id,slug:c.slug,title:c.title,summary:c.summary,region:c.region,purpose:c.purpose,participation:c.participation,status:"FUNDING",targetAmount:c.target,raisedAmount:c.raised,currency:"USD"}});
  for(const c of campaigns){const exists=await prisma.capitalPot.findFirst({where:{projectId:c.id}});if(!exists)await prisma.capitalPot.create({data:{projectId:c.id,organizationId:org.id,title:`${c.title} capital pot`,currency:"USD",targetMinor:BigInt(c.target)*100n,platformFeeBps:250,status:"OPEN"}})}
  console.log("Demo fixtures created only because SEED_DEMO_USERS=true. Emails: creator@powerchain.local, demo@powerchain.local; password: PowerChainLocal123");
}
main().finally(()=>prisma.$disconnect());
