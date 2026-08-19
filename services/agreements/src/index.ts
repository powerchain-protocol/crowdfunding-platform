export const serviceDescriptor = {
  name: "agreements",
  version: "1.0.0",
  criticality: "critical",
  capabilities: ["template.render", "signature.collect", "agreement.finalize"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

