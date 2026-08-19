import { success } from "@powerchain/api-core";
import { API_VERSION, PLATFORM_VERSION } from "@powerchain/config";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(success({
    status: "ok",
    service: "powerchain-api",
    version: PLATFORM_VERSION,
    apiVersion: API_VERSION,
  }));
}
