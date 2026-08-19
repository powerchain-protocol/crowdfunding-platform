export const serviceDescriptor = {
  name: "deal-room",
  version: "1.0.0",
  criticality: "high",
  capabilities: ["message.relay", "attachment.authorize", "call.coordinate"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

