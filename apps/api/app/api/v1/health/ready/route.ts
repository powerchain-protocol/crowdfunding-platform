import { success } from "@powerchain/api-core";
import { readinessChecks } from "../../../../../lib/readiness";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export async function GET() {
  const checks = await readinessChecks();
  const ready = checks.every((check) => check.ok);
  return Response.json(success({ status: ready ? "ready" : "not-ready", checks }), { status: ready ? 200 : 503 });
}
