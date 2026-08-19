export const serviceDescriptor = {
  name: "indexer",
  version: "1.0.0",
  criticality: "critical",
  capabilities: ["chain.index", "leaderboard.project", "activity.project"],
  securityBoundary: "server-only",
  health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
} as const;
export const serviceName = serviceDescriptor.name;

