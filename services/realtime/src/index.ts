export const serviceDescriptor = {
      name: "realtime",
      version: "1.0.0",
      criticality: "medium",
      capabilities: ["event.publish", "sse.fallback", "websocket.health"],
      securityBoundary: "server-only",
      health: { liveness: "/api/v1/health/live", readiness: "/api/v1/health/ready" },
    } as const;
    export const serviceName = serviceDescriptor.name;

export const transportPolicy = { primary: "websocket", fallbacks: ["sse", "polling"], pollingMs: { min: 5000, max: 15000 } } as const;

