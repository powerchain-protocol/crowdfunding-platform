export const serviceDescriptor = {
  name: "webhooks",
  version: "1.0.0",
  criticality: "critical",
  capabilities: ["signature.verify", "delivery.dedupe", "event.route"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

