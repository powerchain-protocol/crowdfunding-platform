import { failure } from "@powerchain/api-core";
export async function GET(){return Response.json(failure("NOTIFICATION_STORE_NOT_CONFIGURED","Notification retrieval requires authenticated user-scoped persistence."),{status:501})}
