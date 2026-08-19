export const SOLANA_NETWORKS = ["devnet", "mainnet-beta"] as const;
export const SUI_NETWORKS = ["testnet", "mainnet"] as const;

export const SOLANA_CROWDFUNDING_INSTRUCTIONS = [
  "contribute",
  "withdraw",
  "refund_single",
  "claim_milestone",
] as const;

export type SolanaCrowdfundingInstruction = (typeof SOLANA_CROWDFUNDING_INSTRUCTIONS)[number];

export const PROGRAM_CONFIGURATION_KEYS = {
  crowdfunding: "CROWDFUNDING_PROGRAM_ID",
  registry: "REGISTRY_PROGRAM_ID",
  contributors: "CONTRIBUTORS_PROGRAM_ID",
  milestoneEscrow: "SOLANA_MILESTONE_ESCROW_PROGRAM_ID",
} as const;
