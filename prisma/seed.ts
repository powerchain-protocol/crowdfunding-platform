import { PrismaClient } from "@prisma/client";
import { randomBytes, scrypt as scryptCallback } from "node:crypto";
import { promisify } from "node:util";
const prisma=new PrismaClient(); const scrypt=promisify(scryptCallback);
async function passwordHash(password:string){const salt=randomBytes(16);const key=await scrypt(password,salt,64) as Buffer;return `scrypt$${salt.toString("base64url")}$${key.toString("base64url")}`}
async function main(){
  const email="founder@powerchain.local"; const user=await prisma.user.upsert({where:{email},update:{},create:{email,passwordHash:await passwordHash("PowerChainLocal123"),displayName:"PowerChain Founder"}});
  let org=await prisma.organization.findFirst({where:{slug:"powerchain-demo"}}); if(!org)org=await prisma.organization.create({data:{slug:"powerchain-demo",name:"PowerChain Demo"}});
  await prisma.organizationMembership.upsert({where:{userId_organizationId:{userId:user.id,organizationId:org.id}},update:{role:"OWNER",status:"ACTIVE"},create:{userId:user.id,organizationId:org.id,role:"OWNER"}});
  const existing=await prisma.saaSSubscription.findFirst({where:{organizationId:org.id}}); if(!existing){const start=new Date(),end=new Date(start.getTime()+14*86400000);await prisma.saaSSubscription.create({data:{organizationId:org.id,planCode:"GROWTH",status:"TRIALING",currentPeriodStart:start,currentPeriodEnd:end}})}
  await prisma.campaign.upsert({where:{slug:"flood-emergency-response"},update:{},create:{organizationId:org.id,ownerUserId:user.id,slug:"flood-emergency-response",title:"Flood Emergency Response",summary:"Emergency response campaign with transparent milestone funding.",region:"Northern Europe",purpose:"DISASTER_RELIEF",participation:"ATTESTATION",status:"FUNDING",targetAmount:"250000",raisedAmount:"147200",currency:"EUR"}});
  await prisma.campaign.upsert({where:{slug:"mobile-medical-clinics"},update:{},create:{organizationId:org.id,ownerUserId:user.id,slug:"mobile-medical-clinics",title:"Mobile Medical Clinics",summary:"Mobile healthcare delivery for underserved communities.",region:"Regional program",purpose:"HUMANITARIAN",participation:"CONTRIBUTION",status:"FUNDING",targetAmount:"120000",raisedAmount:"84200",currency:"EUR"}});
  console.log(`Seeded ${email} / PowerChainLocal123 (local development only)`);
}
main().finally(()=>prisma.$disconnect());
