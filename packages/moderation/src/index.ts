export type ReportReason = "FRAUD" | "MISLEADING" | "IMPERSONATION" | "PROHIBITED_CONTENT" | "HARASSMENT" | "SPAM" | "OTHER";
export type ReportStatus = "OPEN" | "TRIAGED" | "ACTIONED" | "DISMISSED";
export type ModerationAction = "NONE" | "RESTRICT" | "SUSPEND" | "REMOVE";

export interface ModerationReport {
  id: string;
  reporterUserId?: string;
  resourceType: "CAMPAIGN" | "ORGANIZATION" | "USER" | "EVIDENCE";
  resourceId: string;
  reason: ReportReason;
  details?: string;
  status: ReportStatus;
  severity: 1 | 2 | 3 | 4 | 5;
  createdAt: string;
}

export interface AutoSuspensionPolicy {
  enabled: boolean;
  minimumDistinctReporters: number;
  weightedSeverityThreshold: number;
  immediateReasons: ReportReason[];
}

export function shouldAutoSuspend(input: { reports: readonly ModerationReport[]; distinctReporterCount: number; policy: AutoSuspensionPolicy }): boolean {
  if (!input.policy.enabled) return false;
  if (input.reports.some((report) => input.policy.immediateReasons.includes(report.reason) && report.severity === 5)) return true;
  const weighted = input.reports.filter((report) => report.status !== "DISMISSED").reduce((sum, report) => sum + report.severity, 0);
  return input.distinctReporterCount >= input.policy.minimumDistinctReporters && weighted >= input.policy.weightedSeverityThreshold;
}
