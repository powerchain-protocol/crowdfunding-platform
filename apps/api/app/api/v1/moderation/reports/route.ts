import { failure } from "@powerchain/api-core";
export async function GET(){return Response.json(failure("MODERATION_AUTH_NOT_CONFIGURED","Moderation queue access requires authenticated moderator authorization and persistent report storage."),{status:501})}
