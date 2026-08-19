export const serviceDescriptor = {
  name: "reconciliation",
  version: "1.0.0",
  criticality: "critical",
  capabilities: ["settlement.match", "exception.raise", "ledger.confirm"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

