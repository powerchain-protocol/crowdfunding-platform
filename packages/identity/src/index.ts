export type IdentitySubjectType = "PERSON" | "BUSINESS";
export type VerificationCheckType =
  | "IDENTITY_DOCUMENT"
  | "PROOF_OF_ADDRESS"
  | "BUSINESS_REGISTRY"
  | "BENEFICIAL_OWNER"
  | "BANK_ACCOUNT"
  | "TREASURY_CONTROL"
  | "CAMPAIGN_BENEFICIARY";

export type VerificationStatus = "NOT_STARTED" | "PENDING" | "UNDER_REVIEW" | "VERIFIED" | "REJECTED" | "EXPIRED";

export interface VerificationCheck {
  id: string;
  subjectId: string;
  subjectType: IdentitySubjectType;
  type: VerificationCheckType;
  status: VerificationStatus;
  providerReference?: string;
  verifiedAt?: string;
  expiresAt?: string;
  reviewerId?: string;
  reasonCode?: string;
}

export interface IdentityDocumentDescriptor {
  id: string;
  checkId: string;
  kind: "PASSPORT" | "NATIONAL_ID" | "DRIVER_LICENSE" | "PROOF_OF_ADDRESS" | "BUSINESS_DOCUMENT" | "OTHER";
  fileName: string;
  contentType: string;
  sizeBytes: number;
  sha256: string;
  storageKey?: string;
  uploadedAt: string;
}

export interface TrustBadge {
  key: string;
  label: string;
  verified: boolean;
  checkedAt?: string;
}

const labels: Record<VerificationCheckType, string> = {
  IDENTITY_DOCUMENT: "Identity verified",
  PROOF_OF_ADDRESS: "Address verified",
  BUSINESS_REGISTRY: "Business verified",
  BENEFICIAL_OWNER: "Ownership checked",
  BANK_ACCOUNT: "Bank account verified",
  TREASURY_CONTROL: "Treasury control verified",
  CAMPAIGN_BENEFICIARY: "Beneficiary verified",
};

export function badgesFromChecks(checks: readonly VerificationCheck[]): TrustBadge[] {
  return checks.map((check) => ({
    key: check.type,
    label: labels[check.type],
    verified: check.status === "VERIFIED",
    ...(check.verifiedAt ? { checkedAt: check.verifiedAt } : {}),
  }));
}

export function isBusinessVerified(checks: readonly VerificationCheck[]): boolean {
  return ["BUSINESS_REGISTRY", "BENEFICIAL_OWNER"].every((type) => checks.some((check) => check.type === type && check.status === "VERIFIED"));
}
