import { success } from "@powerchain/api-core";
import { SERVICE_REGISTRY } from "@powerchain/service-registry";
export const dynamic = "force-dynamic";
export async function GET() {
  return Response.json(success({ services: SERVICE_REGISTRY, count: SERVICE_REGISTRY.length }));
}
