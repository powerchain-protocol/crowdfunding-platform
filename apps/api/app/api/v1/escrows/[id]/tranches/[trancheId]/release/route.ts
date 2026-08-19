import { failure } from "@powerchain/api-core";
export async function POST(){return Response.json(failure("ESCROW_RELEASE_NOT_CONFIGURED","Tranche release requires live evidence, identity, agreement, fee, policy, multisig and settlement integration checks."),{status:501})}
