export const DOMAIN_EVENTS = [
  "campaign.created",
  "campaign.published",
  "campaign.suspended",
  "payment.created",
  "payment.submitted",
  "payment.settlement.observed",
  "payment.reconciled",
  "donation.confirmed",
  "treasury.disbursement.created",
  "treasury.disbursement.confirmed",
  "milestone.completed",
  "evidence.submitted",
  "evidence.verified",
] as const;

export type DomainEventName = (typeof DOMAIN_EVENTS)[number];
export interface DomainEvent<T = unknown> { id: string; type: DomainEventName; occurredAt: string; data: T }
