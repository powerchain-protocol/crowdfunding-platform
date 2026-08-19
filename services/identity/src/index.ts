export const serviceDescriptor = {
  name: "identity",
  version: "1.0.0",
  criticality: "critical",
  capabilities: ["kyc.check", "business.verify", "document.authorize"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

