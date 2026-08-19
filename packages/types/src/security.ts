export type SecurityDecision = "ALLOW" | "DENY" | "REVIEW";
export type SecurityRisk = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export interface SecurityContext {
  requestId: string;
  userId?: string;
  organizationId?: string;
  walletAddress?: string;
  network?: "devnet" | "mainnet-beta";
  ipHash?: string;
  userAgentHash?: string;
}

export interface SecurityCheckResult {
  decision: SecurityDecision;
  risk: SecurityRisk;
  reasons: readonly string[];
  checkedAt: string;
}
