import { isMockDataMode, providerRequired } from "../../../../../lib/runtime";
import { success } from "@powerchain/api-core";
export async function GET(){ if (!isMockDataMode()) return providerRequired("INVESTOR_PREFERENCES_REQUIRED", "Production investor preferences require authenticated owner-scoped persistence."); return Response.json(success({categories:["Renewables","Health technology"],stages:["Pre-seed","Seed"],countries:["FI","ES"],minTicketMinor:"5000000",maxTicketMinor:"30000000"})); }
export async function PATCH(){ return Response.json({error:{code:"AUTH_PERSISTENCE_REQUIRED",message:"Investor preference updates require authenticated owner-only persistence.",requestId:crypto.randomUUID()}},{status:501}); }
