import { isMockDataMode, providerRequired } from "../../../../lib/runtime";
import { success } from "@powerchain/api-core";
export const dynamic = "force-dynamic";
export async function GET(){ if (!isMockDataMode()) return providerRequired("OFFERS_PERSISTENCE_REQUIRED", "Production offers require authenticated database persistence."); return Response.json(success([{id:"off_1",listingId:"lst_solarflow",investor:"Northshore Ventures",amount:"250000",currency:"EUR",status:"COUNTERED",updatedAt:"2026-08-19T01:18:00Z"}])); }
export async function POST(){ return Response.json({error:{code:"AUTH_PERSISTENCE_REQUIRED",message:"Submitting an investment offer requires an authenticated eligible investor, persisted deal terms and an audit event.",requestId:crypto.randomUUID()}},{status:501}); }
