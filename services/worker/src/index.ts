export const serviceDescriptor = {
  name: "worker",
  version: "1.0.0",
  criticality: "high",
  capabilities: ["job.consume", "retry.schedule", "dead-letter.record"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

