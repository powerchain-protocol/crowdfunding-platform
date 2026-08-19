import { failure } from "@powerchain/api-core";
export async function POST(){return Response.json(failure("IDENTITY_PROVIDER_NOT_CONFIGURED","Identity checks cannot be created until the verification provider, authorization policy and audit persistence are configured."),{status:501})}
