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
