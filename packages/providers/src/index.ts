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

export interface RealtimeDealRoomProvider {
  subscribe(roomId: string, onEvent: (event: unknown) => void): Promise<() => void>;
}

export interface MeetingProvider {
  createMeeting(input: { roomId: string; startsAt: string; participantUserIds: string[] }): Promise<{ meetingReference: string; joinUrl: string }>;
}

export interface PrivateDocumentStorageProvider {
  createUpload(input: { ownerUserId: string; scope: string; fileName: string; contentType: string; sizeBytes: number; sha256: string }): Promise<{ storageKey: string; uploadUrl: string }>;
  createDownload(storageKey: string, viewerUserId: string): Promise<{ downloadUrl: string; expiresAt: string }>;
}

export interface SolanaContributorsDataProvider {
  getTopContributors(campaign: string, limit?: 3): Promise<readonly { contributor: string; amountBaseUnits: string }[]>;
}

export interface MilestoneEscrowProgramProvider {
  prepareClaimMilestone(input: { campaign: string; milestoneId: string; proofCommitment: string; owner: string }): Promise<{ serializedTransaction: string; reviewHash: string }>;
}
export * from "./embedded-wallets";
