export const SOLANA_PROGRAM_KEYS = [
  "crowdfunding",
  "registry",
  "contributors",
  "reserve-fund",
  "grants",
  "certificate",
  "rewards",
  "token",
  "milestone-escrow",
] as const;

export type SolanaProgramKey = (typeof SOLANA_PROGRAM_KEYS)[number];

export const CROWDFUNDING_PROGRAM_METHODS = [
  "contribute",
  "withdraw",
  "refund_single",
  "claim_milestone",
] as const;

export interface SolanaProgramReference {
  key: SolanaProgramKey;
  programId: string | null;
  cluster: "devnet" | "mainnet-beta";
  verified: boolean;
}

export function requireProgramId(reference: SolanaProgramReference): string {
  const value = reference.programId?.trim();
  if (!value) throw new Error(`${reference.key} program ID is not configured`);
  return value;
}

export function requireVerifiedProgram(reference: SolanaProgramReference): string {
  const programId = requireProgramId(reference);
  if (!reference.verified) throw new Error(`${reference.key} program deployment is configured but not marked verified`);
  return programId;
}
