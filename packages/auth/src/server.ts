import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { prisma } from "@powerchain/database";
import { normalizeEmail, validatePassword, type PlatformRole } from "./index";

const scrypt = promisify(scryptCallback);
const KEY_BYTES = 64;

export async function hashPassword(password:string):Promise<string>{
  const errors=validatePassword(password); if(errors.length) throw new Error(errors.join(" "));
  const salt=randomBytes(16); const key=await scrypt(password,salt,KEY_BYTES) as Buffer;
  return `scrypt$${salt.toString("base64url")}$${key.toString("base64url")}`;
}
export async function verifyPassword(password:string, encoded:string):Promise<boolean>{
  const [kind,saltB64,keyB64]=encoded.split("$"); if(kind!=="scrypt"||!saltB64||!keyB64) return false;
  const expected=Buffer.from(keyB64,"base64url"); const actual=await scrypt(password,Buffer.from(saltB64,"base64url"),expected.length) as Buffer;
  return actual.length===expected.length && timingSafeEqual(actual,expected);
}
export function hashSessionToken(token:string):string{return createHash("sha256").update(token).digest("hex")}
export async function createSession(userId:string, ttlSeconds=43200){
  const token=randomBytes(32).toString("base64url"); const expiresAt=new Date(Date.now()+ttlSeconds*1000);
  await prisma.session.create({data:{userId,tokenHash:hashSessionToken(token),expiresAt}}); return {token,expiresAt};
}
export async function getSessionByToken(token:string){
  const now=new Date();
  const session=await prisma.session.findUnique({where:{tokenHash:hashSessionToken(token)},include:{user:{include:{memberships:{where:{status:"ACTIVE"},include:{organization:true}}}}}});
  if(!session||session.revokedAt||session.expiresAt<=now) return null; return session;
}
export async function revokeSessionToken(token:string){await prisma.session.updateMany({where:{tokenHash:hashSessionToken(token),revokedAt:null},data:{revokedAt:new Date()}})}
export async function registerUser(input:{email:string;password:string;displayName?:string;organizationName?:string}){
  const email=normalizeEmail(input.email); const passwordHash=await hashPassword(input.password);
  const slugBase=(input.organizationName||input.displayName||email.split("@")[0]||"workspace").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"workspace";
  return prisma.$transaction(async tx=>{
    const user=await tx.user.create({data:{email,passwordHash,displayName:input.displayName}});
    const org=await tx.organization.create({data:{name:input.organizationName||`${input.displayName||"My"} Workspace`,slug:`${slugBase}-${randomBytes(3).toString("hex")}`}});
    await tx.organizationMembership.create({data:{userId:user.id,organizationId:org.id,role:"OWNER"}});
    const days=Number(process.env.SAAS_TRIAL_DAYS||14); const start=new Date(); const end=new Date(start.getTime()+days*86400000);
    await tx.saaSSubscription.create({data:{organizationId:org.id,planCode:process.env.SAAS_DEFAULT_PLAN||"STARTER",status:"TRIALING",currentPeriodStart:start,currentPeriodEnd:end}});
    return {user,organization:org};
  });
}
export async function authenticateUser(email:string,password:string){const user=await prisma.user.findUnique({where:{email:normalizeEmail(email)}}); if(!user||user.status!=="ACTIVE"||!(await verifyPassword(password,user.passwordHash))) return null; return user;}
export function membershipRoles(session:Awaited<ReturnType<typeof getSessionByToken>>):PlatformRole[]{if(!session)return[];return session.user.memberships.map(m=>m.role as PlatformRole)}


export async function createPasswordReset(email:string){
  const user=await prisma.user.findUnique({where:{email:normalizeEmail(email)}}); if(!user) return null;
  const token=randomBytes(32).toString("base64url"); const expiresAt=new Date(Date.now()+30*60*1000);
  await prisma.passwordResetToken.create({data:{userId:user.id,tokenHash:hashSessionToken(token),expiresAt}}); return {token,expiresAt,userId:user.id};
}
export async function consumePasswordReset(token:string,newPassword:string){
  const tokenHash=hashSessionToken(token); const row=await prisma.passwordResetToken.findUnique({where:{tokenHash}}); if(!row||row.usedAt||row.expiresAt<=new Date()) return false;
  const passwordHash=await hashPassword(newPassword);
  await prisma.$transaction([prisma.user.update({where:{id:row.userId},data:{passwordHash}}),prisma.passwordResetToken.update({where:{id:row.id},data:{usedAt:new Date()}}),prisma.session.updateMany({where:{userId:row.userId,revokedAt:null},data:{revokedAt:new Date()}})]); return true;
}
