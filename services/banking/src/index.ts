export const serviceDescriptor = {
  name: "banking",
  version: "1.0.0",
  criticality: "critical",
  capabilities: ["reference.create", "settlement.observe", "settlement.reconcile"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

