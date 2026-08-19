import { isMockDataMode, providerRequired } from "../../../../lib/runtime";
import { success } from "@powerchain/api-core";
import { mockListings } from "../../../../lib/mock-capital";
export const dynamic = "force-dynamic";
export async function GET(){ if (!isMockDataMode()) return providerRequired("LISTINGS_PERSISTENCE_REQUIRED", "Production listings require authenticated database persistence."); return Response.json(success([...mockListings])); }
export async function POST(){ return Response.json({error:{code:"AUTH_PERSISTENCE_REQUIRED",message:"Creating a founder listing requires authenticated persistence, business verification and idempotency wiring.",requestId:crypto.randomUUID()}},{status:501}); }
