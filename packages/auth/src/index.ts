export type PlatformRole =
  | "OWNER"
  | "ADMIN"
  | "CAMPAIGN_MANAGER"
  | "FINANCE"
  | "REVIEWER"
  | "FIELD_OPERATOR"
  | "AUDITOR"
  | "VIEWER"
  | "COMPLIANCE_REVIEWER"
  | "MODERATOR"
  | "TREASURY_ADMIN"
  | "TREASURY_APPROVER"
  | "TREASURY_EXECUTOR";

export interface AuthSession {
  id: string;
  userId: string;
  organizationId?: string;
  roles: PlatformRole[];
  expiresAt: string;
  mfaVerified: boolean;
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function validatePassword(value: string): string[] {
  const errors: string[] = [];
  if (value.length < 12) errors.push("Password must contain at least 12 characters.");
  if (!/[A-Z]/.test(value)) errors.push("Password must include an uppercase letter.");
  if (!/[a-z]/.test(value)) errors.push("Password must include a lowercase letter.");
  if (!/[0-9]/.test(value)) errors.push("Password must include a number.");
  return errors;
}
