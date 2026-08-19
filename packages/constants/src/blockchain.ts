export const SOLANA_NETWORKS = ["devnet", "mainnet-beta"] as const;
export type SolanaNetwork = (typeof SOLANA_NETWORKS)[number];

export const SUI_NETWORKS = ["testnet", "mainnet"] as const;

/**
 * Official public Solana cluster endpoints.
 * These are rate-limited public services and are intended as development or
 * emergency fallback endpoints rather than PowerChain production infrastructure.
 */
export const SOLANA_PUBLIC_RPC_ENDPOINTS = {
  devnet: "https://api.devnet.solana.com",
  "mainnet-beta": "https://api.mainnet.solana.com",
} as const satisfies Record<SolanaNetwork, string>;

export const SOLANA_PUBLIC_WS_ENDPOINTS = {
  devnet: "wss://api.devnet.solana.com",
  "mainnet-beta": "wss://api.mainnet.solana.com",
} as const satisfies Record<SolanaNetwork, string>;

/** Public protocol program IDs. These are addresses, never signing material. */
export const SOLANA_STANDARD_PROGRAM_IDS = {
  system: "11111111111111111111111111111111",
  token: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
  token2022: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
  associatedToken: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
} as const;

export const PWRC = {
  symbol: "PWRC",
  decimals: 9,
  tokenProgramId: SOLANA_STANDARD_PROGRAM_IDS.token2022,
  mainnetMint: "PWRCRXXZxbg6FdQZfK3PMD7KP8xfxs9acvifJiG46wc",
} as const;

export const POWERCHAIN_SOLANA_SOURCE_PROGRAM_IDS = {
  crowdfunding: "Crwd111111111111111111111111111111111111111",
  registry: "Reg1111111111111111111111111111111111111111",
  contributors: "Cont111111111111111111111111111111111111111",
} as const;

export const SOLANA_CROWDFUNDING_INSTRUCTIONS = [
  "contribute",
  "withdraw",
  "refund_single",
  "claim_milestone",
] as const;

export type SolanaCrowdfundingInstruction = (typeof SOLANA_CROWDFUNDING_INSTRUCTIONS)[number];

/**
 * PowerChain-owned program IDs must be populated from actual deployment output.
 * No custom program address is hard-coded here until the deployment has been
 * independently verified.
 */
export const PROGRAM_CONFIGURATION_KEYS = {
  crowdfunding: "CROWDFUNDING_PROGRAM_ID",
  registry: "REGISTRY_PROGRAM_ID",
  contributors: "CONTRIBUTORS_PROGRAM_ID",
  milestoneEscrow: "SOLANA_MILESTONE_ESCROW_PROGRAM_ID",
} as const;
