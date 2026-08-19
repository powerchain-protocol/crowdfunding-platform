import { failure } from "@powerchain/api-core";
export async function POST(){return Response.json(failure("MODERATION_STORE_NOT_CONFIGURED","Report submission requires durable moderation storage, abuse controls, rate limiting and append-only audit persistence."),{status:501})}
