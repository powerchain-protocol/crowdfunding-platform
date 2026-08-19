export type ServiceCriticality = "critical" | "high" | "medium";
export interface ServiceRecord {
  name: string;
  criticality: ServiceCriticality;
  purpose: string;
  readiness: "required" | "degraded-ok";
}

export const SERVICE_REGISTRY = [
  { name: "agreements", criticality: "critical", purpose: "Template rendering, signatures and immutable agreement finalization", readiness: "required" },
  { name: "audit", criticality: "critical", purpose: "Append-only tamper-evident audit events", readiness: "required" },
  { name: "banking", criticality: "critical", purpose: "Bank references and observed settlement integration", readiness: "required" },
  { name: "capital", criticality: "high", purpose: "Investor interest, offers and tranche coordination", readiness: "degraded-ok" },
  { name: "deal-room", criticality: "high", purpose: "Deal-room collaboration, attachments and calls", readiness: "degraded-ok" },
  { name: "identity", criticality: "critical", purpose: "KYC and business verification orchestration", readiness: "required" },
  { name: "indexer", criticality: "critical", purpose: "Authoritative chain-event projections", readiness: "required" },
  { name: "moderation", criticality: "high", purpose: "Reports, auto-suspension policy and moderation audit", readiness: "degraded-ok" },
  { name: "notifications", criticality: "medium", purpose: "In-app and email delivery", readiness: "degraded-ok" },
  { name: "realtime", criticality: "medium", purpose: "WebSocket/SSE/polling realtime fan-out", readiness: "degraded-ok" },
  { name: "reconciliation", criticality: "critical", purpose: "Settlement matching and ledger recognition", readiness: "required" },
  { name: "security", criticality: "critical", purpose: "Policy, rate limiting and risk signals", readiness: "required" },
  { name: "webhooks", criticality: "critical", purpose: "Signed, idempotent external event ingestion", readiness: "required" },
  { name: "worker", criticality: "high", purpose: "Async jobs, retries and dead-letter handling", readiness: "degraded-ok" },
] as const satisfies readonly ServiceRecord[];

export const serviceByName = (name: string) => SERVICE_REGISTRY.find((service) => service.name === name);
