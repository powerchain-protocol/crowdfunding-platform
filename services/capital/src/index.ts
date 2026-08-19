export const serviceDescriptor = {
  name: "capital",
  version: "1.0.0",
  criticality: "high",
  capabilities: ["interest.receive", "offer.manage", "tranche.coordinate"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

