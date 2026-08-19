import { API_VERSION, PLATFORM_VERSION } from "@powerchain/config";
import { success } from "@powerchain/api-core";
export const dynamic = "force-dynamic";
export async function GET() {
  return Response.json(success({ status: "alive", service: "powerchain-api", version: PLATFORM_VERSION, apiVersion: API_VERSION, node: process.version, now: new Date().toISOString() }));
}
