import { failure } from "@powerchain/api-core";
export async function POST(){return Response.json(failure("AGREEMENT_TEMPLATE_STORE_NOT_CONFIGURED","Agreement rendering requires a versioned counsel-approved template store and authoritative campaign/deal terms."),{status:501})}
