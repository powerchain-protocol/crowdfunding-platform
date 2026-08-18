import { success } from "@powerchain/api-core";
import type { CampaignSummary } from "@powerchain/types";
const campaigns: CampaignSummary[] = [
  { id:"cmp_flood_2026", slug:"flood-emergency-response", title:"Flood Emergency Response", purpose:"DISASTER_RELIEF", participation:"ATTESTATION", status:"FUNDING", targetAmount:"250000", raisedAmount:"147200", currency:"EUR", region:"Northern Europe" },
  { id:"cmp_medical_41", slug:"mobile-medical-clinics", title:"Mobile Medical Clinics", purpose:"HUMANITARIAN", participation:"CONTRIBUTION", status:"FUNDING", targetAmount:"120000", raisedAmount:"84200", currency:"EUR", region:"Regional program" }
];
export async function GET(){ return Response.json(success(campaigns)); }
export async function POST(){ return Response.json({ error: { code:"WRITE_DISABLED_IN_SCAFFOLD", message:"Campaign writes require persistence, authentication, authorization and idempotency wiring.", requestId:"req_scaffold" } }, { status: 501 }); }
