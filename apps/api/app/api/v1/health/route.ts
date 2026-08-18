import { success } from "@powerchain/api-core";
export const dynamic = "force-dynamic";
export async function GET() { return Response.json(success({ status: "ok", service: "powerchain-api", version: "1.3.0" })); }
