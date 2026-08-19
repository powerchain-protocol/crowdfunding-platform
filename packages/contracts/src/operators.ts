export const OPERATOR_PERMISSIONS = [
  "identity.review",
  "wallet.verify",
  "treasury.review",
  "milestone.review",
  "moderation.review",
  "audit.read",
] as const;

export type OperatorPermission = (typeof OPERATOR_PERMISSIONS)[number];

export interface OperatorAuthorityPolicy {
  operatorId: string;
  permissions: readonly OperatorPermission[];
  mfaRequired: boolean;
  networkScope: readonly ("devnet" | "mainnet-beta")[];
}

export function operatorCan(policy: OperatorAuthorityPolicy, permission: OperatorPermission): boolean {
  return policy.permissions.includes(permission);
}
