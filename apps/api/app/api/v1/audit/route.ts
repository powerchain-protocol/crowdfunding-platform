import { failure } from "@powerchain/api-core";
export async function GET(){return Response.json(failure("AUDIT_STORE_NOT_CONFIGURED","Audit retrieval requires authenticated access to the append-only audit store."),{status:501})}
