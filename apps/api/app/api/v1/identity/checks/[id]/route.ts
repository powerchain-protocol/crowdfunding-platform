import { failure } from "@powerchain/api-core";
export async function GET(){return Response.json(failure("IDENTITY_PROVIDER_NOT_CONFIGURED","Identity check retrieval requires a configured verification provider and authenticated organization access."),{status:501})}
