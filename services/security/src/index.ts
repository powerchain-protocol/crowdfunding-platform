export const serviceDescriptor = {
  name: "security",
  version: "1.0.0",
  criticality: "critical",
  capabilities: ["policy.evaluate", "rate-limit.enforce", "risk.signal"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

