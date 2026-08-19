import { isMockDataMode, providerRequired } from "../../../../lib/runtime";
import { success } from "@powerchain/api-core";
export async function GET(){ if (!isMockDataMode()) return providerRequired("WATCHLIST_PERSISTENCE_REQUIRED", "Production watchlists require authenticated owner-scoped persistence."); return Response.json(success([{listingId:"lst_solarflow",createdAt:"2026-08-19T01:00:00Z"},{listingId:"lst_medroute",createdAt:"2026-08-19T01:04:00Z"}])); }
export async function POST(){ return Response.json({error:{code:"AUTH_PERSISTENCE_REQUIRED",message:"Watchlist writes require authenticated investor persistence; watchlist rows are owner-only under RLS.",requestId:crypto.randomUUID()}},{status:501}); }
