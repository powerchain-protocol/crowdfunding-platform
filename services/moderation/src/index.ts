export const serviceDescriptor = {
  name: "moderation",
  version: "1.0.0",
  criticality: "high",
  capabilities: ["report.triage", "suspension.evaluate", "action.audit"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

