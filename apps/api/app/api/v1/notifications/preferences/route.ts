import { failure } from "@powerchain/api-core";
export async function PATCH(){return Response.json(failure("NOTIFICATION_PREFERENCES_NOT_CONFIGURED","Notification preferences require authenticated user persistence and email-delivery configuration."),{status:501})}
