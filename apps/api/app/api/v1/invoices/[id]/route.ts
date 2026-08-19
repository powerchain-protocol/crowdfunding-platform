import { success } from "@powerchain/api-core";
import { demoInvoices } from "@powerchain/data";
export async function GET(_request:Request, context:{params:Promise<{id:string}>}){ const {id}=await context.params; const invoice=demoInvoices.find((item)=>item.id===id || item.number===id); if(!invoice) return Response.json({error:{code:"INVOICE_NOT_FOUND",message:"Invoice not found.",requestId:crypto.randomUUID()}},{status:404}); return Response.json(success(invoice)); }
