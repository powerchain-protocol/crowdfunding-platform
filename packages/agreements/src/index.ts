export type AgreementStatus = "DRAFT" | "REVIEW" | "READY_FOR_SIGNATURE" | "PARTIALLY_SIGNED" | "SIGNED" | "VOID" | "SUPERSEDED";

export interface AgreementTemplate {
  id: string;
  name: string;
  version: string;
  jurisdiction?: string;
  counselApprovedAt?: string;
  counselReference?: string;
  requiredFields: string[];
  body: string;
}

export interface AgreementRecord {
  id: string;
  campaignId: string;
  templateId: string;
  templateVersion: string;
  status: AgreementStatus;
  dealTerms: Record<string, string>;
  renderedContentHash: string;
  createdAt: string;
  supersedesAgreementId?: string;
}

export interface SignatureRecord {
  id: string;
  agreementId: string;
  signerUserId: string;
  signerName: string;
  signerRole: string;
  signedContentHash: string;
  consentVersion: string;
  signedAt: string;
  requestId: string;
  ipHash?: string;
  userAgentHash?: string;
}

export function renderTemplate(template: AgreementTemplate, terms: Record<string,string>): string {
  const missing = template.requiredFields.filter((key) => !terms[key]);
  if (missing.length) throw new Error(`Missing agreement fields: ${missing.join(", ")}`);
  return template.body.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_match, key: string) => terms[key] ?? `{{${key}}}`);
}

export function canCollectSignatures(template: AgreementTemplate): boolean {
  return Boolean(template.counselApprovedAt && template.counselReference);
}
