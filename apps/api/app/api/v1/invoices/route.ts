import { success } from "@powerchain/api-core";
import { demoInvoices } from "@powerchain/data";
export const dynamic = "force-dynamic";
export async function GET(){ return Response.json(success(demoInvoices)); }
export async function POST(){ return Response.json({ error:{ code:"INVOICE_PERSISTENCE_NOT_CONFIGURED", message:"Invoice issuing requires authenticated organization access, persistence, immutable company/customer snapshots, numbering policy and audit hashing.", requestId:crypto.randomUUID() } }, { status:501 }); }
