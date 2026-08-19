import { isMockDataMode, providerRequired } from "../../../../lib/runtime";
import { success } from "@powerchain/api-core";
export async function GET(){ if (!isMockDataMode()) return providerRequired("INTERESTS_PERSISTENCE_REQUIRED", "Production investor interest requires authenticated persistence."); return Response.json(success([{id:"int_1",listingId:"lst_solarflow",status:"OPEN",createdAt:"2026-08-19T01:07:00Z"}])); }
export async function POST(){ return Response.json({error:{code:"AUTH_PERSISTENCE_REQUIRED",message:"Expressing investor interest requires authenticated investor identity, listing eligibility and persistence.",requestId:crypto.randomUUID()}},{status:501}); }
