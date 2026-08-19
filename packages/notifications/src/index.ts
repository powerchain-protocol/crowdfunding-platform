export type NotificationChannel = "IN_APP" | "EMAIL";
export type NotificationStatus = "QUEUED" | "SENT" | "DELIVERED" | "FAILED" | "READ";
export type NotificationType =
  | "IDENTITY_CHECK_UPDATED"
  | "AGREEMENT_SIGNATURE_REQUIRED"
  | "AGREEMENT_SIGNED"
  | "EVIDENCE_REVIEW_REQUIRED"
  | "TRANCHE_READY"
  | "TRANCHE_RELEASED"
  | "CAMPAIGN_REPORTED"
  | "CAMPAIGN_SUSPENDED"
  | "INVESTOR_INTEREST_RECEIVED"
  | "OFFER_RECEIVED"
  | "OFFER_COUNTERED"
  | "DEAL_ROOM_MESSAGE"
  | "MILESTONE_PROOF_SUBMITTED"
  | "MILESTONE_PROOF_APPROVED"
  | "MILESTONE_CLAIM_READY";

export interface NotificationRecord {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  href?: string;
  channel: NotificationChannel;
  status: NotificationStatus;
  createdAt: string;
  sentAt?: string;
  readAt?: string;
}

export interface NotificationPreference {
  userId: string;
  type: NotificationType;
  inApp: boolean;
  email: boolean;
}

export interface EmailProvider {
  send(input: { to: string; subject: string; text: string; idempotencyKey: string }): Promise<{ providerMessageId: string }>;
}
