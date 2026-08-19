export interface MilestoneProof {
  id: string;
  milestoneId: string;
  submitterUserId: string;
  ipfsUri: string;
  sha256: string;
  note?: string;
  submittedAt: string;
  verifiedAt?: string;
  verifiedByInvestorId?: string;
}

const IPFS_URI = /^ipfs:\/\/[a-zA-Z0-9]+(?:\/[A-Za-z0-9._~!$&'()*+,;=:@%/-]*)?$/;

export function isValidIpfsProofUri(uri: string): boolean {
  return IPFS_URI.test(uri) && uri.length <= 512;
}

export function canClaimMilestone(input: { proof: MilestoneProof; investorApproved: boolean; trancheFunded: boolean; alreadyClaimed: boolean }): boolean {
  return isValidIpfsProofUri(input.proof.ipfsUri)
    && Boolean(input.proof.verifiedAt && input.proof.verifiedByInvestorId)
    && input.investorApproved
    && input.trancheFunded
    && !input.alreadyClaimed;
}

export function milestoneClaimBlockers(input: { proof: MilestoneProof; investorApproved: boolean; trancheFunded: boolean; alreadyClaimed: boolean }): string[] {
  const blockers: string[] = [];
  if (!isValidIpfsProofUri(input.proof.ipfsUri)) blockers.push("A valid ipfs:// proof link is required.");
  if (!input.proof.verifiedAt || !input.proof.verifiedByInvestorId) blockers.push("Milestone proof must be verified by an authorized investor/reviewer.");
  if (!input.investorApproved) blockers.push("Investor tranche approval is required.");
  if (!input.trancheFunded) blockers.push("The tranche is not funded.");
  if (input.alreadyClaimed) blockers.push("This milestone tranche has already been claimed.");
  return blockers;
}
