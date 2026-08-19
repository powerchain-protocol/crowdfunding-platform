export const serviceDescriptor = {
  name: "notifications",
  version: "1.0.0",
  criticality: "medium",
  capabilities: ["inapp.publish", "email.enqueue", "preferences.resolve"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

