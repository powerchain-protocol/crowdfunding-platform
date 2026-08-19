import { failure } from "@powerchain/api-core";
export async function POST(){return Response.json(failure("ESIGN_PERSISTENCE_NOT_CONFIGURED","Electronic signatures require authenticated signer authorization, exact document-hash binding, durable timestamping and append-only audit persistence."),{status:501})}
