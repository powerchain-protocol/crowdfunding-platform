export const OPERATOR_TYPES = ["PLATFORM", "COMPLIANCE", "TREASURY", "MODERATION", "SUPPORT", "INDEXER"] as const;
export type OperatorType = (typeof OPERATOR_TYPES)[number];

export const OPERATOR_STATUSES = ["ACTIVE", "SUSPENDED", "REVOKED"] as const;
export type OperatorStatus = (typeof OPERATOR_STATUSES)[number];

export interface OperatorProfile {
  id: string;
  userId: string;
  operatorType: OperatorType;
  status: OperatorStatus;
  permissions: readonly string[];
  createdAt: string;
  updatedAt: string;
}

export interface OperatorActionReview {
  operatorId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  reason: string;
  requestId: string;
}
