export const TRUSTED_WALLET_KINDS = ["PERSONAL", "ORGANIZATION", "TREASURY", "BENEFICIARY", "OPERATOR"] as const;
export type TrustedWalletKind = (typeof TRUSTED_WALLET_KINDS)[number];

export const TRUSTED_WALLET_STATUSES = ["ACTIVE", "SUSPENDED", "REVOKED"] as const;
export type TrustedWalletStatus = (typeof TRUSTED_WALLET_STATUSES)[number];

export interface TrustedWallet {
  id: string;
  userId: string;
  organizationId?: string;
  address: string;
  network: "devnet" | "mainnet-beta";
  kind: TrustedWalletKind;
  label?: string;
  status: TrustedWalletStatus;
  verifiedAt?: string;
  verificationSource?: "SELF" | "KYC" | "BUSINESS" | "TREASURY_POLICY" | "OPERATOR_REVIEW";
  createdAt: string;
  updatedAt: string;
}

export interface CreateTrustedWalletInput {
  address: string;
  network: "devnet" | "mainnet-beta";
  kind?: Exclude<TrustedWalletKind, "OPERATOR">;
  label?: string;
}
