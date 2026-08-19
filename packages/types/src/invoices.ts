import type { CompanyAddress, CompanySocialLink, OrganizationEntityType } from "./company";

export type InvoiceStatus =
  | "DRAFT"
  | "ISSUED"
  | "PARTIALLY_PAID"
  | "PAID"
  | "OVERDUE"
  | "VOID";

export type InvoiceSettlementRail = "SEPA" | "SEPA_INSTANT" | "EURE" | "USDC" | "PWRC" | "MANUAL";

export interface InvoicePartySnapshot {
  name: string;
  tradingName?: string;
  entityType?: OrganizationEntityType;
  registrationNumber?: string;
  taxId?: string;
  foundationNumber?: string;
  email?: string;
  phone?: string;
  website?: string;
  logoUrl?: string;
  address?: CompanyAddress;
  socialLinks?: CompanySocialLink[];
}

export interface InvoiceLineItem {
  id: string;
  description: string;
  quantity: string;
  unitPrice: string;
  taxRateBps: number;
  metadata?: Record<string, string>;
}

export interface InvoiceFeeLine {
  id: string;
  label: string;
  amount: string;
  kind: "PLATFORM" | "NETWORK" | "PAYMENT" | "OTHER";
}

export interface InvoiceSettlement {
  rail: InvoiceSettlementRail;
  asset?: "EUR" | "EURe" | "USDC" | "PWRC";
  network?: "BANK" | "EVM" | "SOLANA" | "SUI";
  paymentReference?: string;
  treasuryAddress?: string;
  ibanMasked?: string;
  transactionId?: string;
}

export interface Invoice {
  id: string;
  number: string;
  status: InvoiceStatus;
  issuer: InvoicePartySnapshot;
  customer: InvoicePartySnapshot;
  campaignId?: string;
  projectId?: string;
  agreementId?: string;
  currency: "EUR" | "USD";
  issuedAt: string;
  dueAt: string;
  servicePeriodStart?: string;
  servicePeriodEnd?: string;
  lines: InvoiceLineItem[];
  fees: InvoiceFeeLine[];
  discountAmount?: string;
  notes?: string;
  paymentTerms?: string;
  settlement?: InvoiceSettlement;
  auditHash?: string;
  createdAt: string;
  updatedAt: string;
}

export interface InvoiceTotals {
  subtotal: string;
  tax: string;
  fees: string;
  discount: string;
  total: string;
}
