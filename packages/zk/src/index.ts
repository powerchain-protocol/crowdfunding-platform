export type ZkProofPurpose = "IDENTITY_ATTRIBUTE" | "INVESTOR_ELIGIBILITY" | "BUSINESS_ATTRIBUTE" | "BALANCE_THRESHOLD" | "NON_MEMBERSHIP";

export interface ZkProofDescriptor {
  id: string;
  purpose: ZkProofPurpose;
  proofSystem: "GROTH16" | "PLONK" | "OTHER";
  circuitVersion: string;
  publicInputsHash: string;
  proofHash: string;
  verifierReference: string;
  verifiedAt?: string;
}

export interface EligibilityPublicInputs {
  listingId: string;
  eligibilityPolicyHash: string;
  subjectCommitment: string;
  validUntil?: string;
}

/**
 * ZK proofs are supporting privacy primitives, not authorization by themselves.
 * Policy/RLS/escrow checks remain authoritative for application actions.
 */
export function canUseVerifiedProof(proof: ZkProofDescriptor): boolean {
  return Boolean(proof.verifiedAt && proof.publicInputsHash.length >= 32 && proof.proofHash.length >= 32 && proof.verifierReference);
}
