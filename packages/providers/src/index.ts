export interface BankSettlementProvider {
  createPaymentReference(input: { campaignId: string; amount: string; currency: "EUR" }): Promise<{ reference: string }>;
  getSettlement(reference: string): Promise<{ status: "PENDING" | "OBSERVED" | "SETTLED" | "FAILED"; transactionId?: string }>;
}

export interface TreasuryProvider {
  getAddress(treasuryId: string): Promise<string>;
  createProposal(input: { treasuryId: string; recipient: string; amount: string; asset: string }): Promise<{ proposalId: string }>;
  getProposal(proposalId: string): Promise<{ status: "PENDING" | "APPROVED" | "EXECUTED" | "REJECTED" }>;
}

export interface BlockchainDataProvider {
  getTransaction(id: string): Promise<unknown>;
  getTransfers(address: string): Promise<readonly unknown[]>;
}

export interface AttestationProvider {
  issue(input: { schema: string; subject: string; dataHash: string }): Promise<{ attestationId: string }>;
}


export interface IdentityVerificationProvider {
  createCheck(input: { subjectId: string; subjectType: "PERSON" | "BUSINESS"; checkType: string }): Promise<{ checkId: string }>;
  getCheck(checkId: string): Promise<{ status: "PENDING" | "UNDER_REVIEW" | "VERIFIED" | "REJECTED"; providerReference?: string }>;
}

export interface SecureDocumentStorageProvider {
  createUpload(input: { purpose: "KYC" | "BUSINESS_VERIFICATION" | "EVIDENCE" | "AGREEMENT"; contentType: string; sizeBytes: number; sha256: string }): Promise<{ storageKey: string; uploadUrl: string; expiresAt: string }>;
}

export interface EmailDeliveryProvider {
  send(input: { to: string; subject: string; text: string; idempotencyKey: string }): Promise<{ messageId: string }>;
}
