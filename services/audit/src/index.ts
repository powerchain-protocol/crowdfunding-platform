export const serviceDescriptor = {
  name: "audit",
  version: "1.0.0",
  criticality: "critical",
  capabilities: ["event.append", "chain.verify", "export.prepare"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

