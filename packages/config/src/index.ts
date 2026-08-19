export const BRAND = {
  name: "PowerChain",
  product: "Crowdfunding",
  description: "Transparent crowdfunding and disbursement infrastructure",
} as const;

export const APP_REGISTRY = {
  web: { label: "Website", env: "NEXT_PUBLIC_WEB_URL", fallback: "http://localhost:3000" },
  crowdfunding: { label: "Crowdfunding", env: "NEXT_PUBLIC_CROWDFUNDING_URL", fallback: "http://localhost:3001" },
  donate: { label: "Donate", env: "NEXT_PUBLIC_DONATE_URL", fallback: "http://localhost:3002" },
  checkout: { label: "Checkout", env: "NEXT_PUBLIC_CHECKOUT_URL", fallback: "http://localhost:3003" },
  dashboard: { label: "Dashboard", env: "NEXT_PUBLIC_DASHBOARD_URL", fallback: "http://localhost:3004" },
  treasury: { label: "Treasury", env: "NEXT_PUBLIC_TREASURY_URL", fallback: "http://localhost:3005" },
  admin: { label: "Admin", env: "NEXT_PUBLIC_ADMIN_URL", fallback: "http://localhost:3006" },
  explorer: { label: "Explorer", env: "NEXT_PUBLIC_EXPLORER_URL", fallback: "http://localhost:3007" },
  docs: { label: "Docs", env: "NEXT_PUBLIC_DOCS_URL", fallback: "http://localhost:3008" },
  pwa: { label: "Field PWA", env: "NEXT_PUBLIC_PWA_URL", fallback: "http://localhost:3009" },
  api: { label: "API", env: "NEXT_PUBLIC_API_URL", fallback: "http://localhost:3010" },
} as const;

export type AppName = keyof typeof APP_REGISTRY;

export const PUBLIC_ASSETS = {
  powerchain: "/assets/brand/powerchain.png",
  powerchainWhite: "/assets/brand/powerchain-white.png",
  pwrc: "/assets/tokens/pwrc.png",
} as const;

export const NETWORKS = {
  solanaDevnet: { family: "solana", network: "devnet", writesAllowedInProduction: false },
  solanaMainnet: { family: "solana", network: "mainnet-beta", writesAllowedInProduction: true },
  suiTestnet: { family: "sui", network: "testnet", writesAllowedInProduction: false },
  suiMainnet: { family: "sui", network: "mainnet", writesAllowedInProduction: true },
  evm: { family: "evm", network: "configured", writesAllowedInProduction: true },
} as const;

export const ASSETS = {
  eure: { symbol: "EURe", issuer: "Monerium", decimals: 18, settlementRail: "EVM" },
  usdc: { symbol: "USDC", issuer: "Circle", decimals: 6, settlementRail: "MULTICHAIN" },
  pwrc: { symbol: "PWRC", issuer: "PowerChain", decimals: 9, settlementRail: "SOLANA" },
} as const;


export const PLATFORM_DEFAULTS = {
  displayCurrency: "USD",
  solanaNetwork: "devnet",
} as const;

/** Canonical PowerChain Crowdfunding product version. Architecture may evolve without a semver bump. */
export const PLATFORM_VERSION = "1.0.0" as const;
export const API_VERSION = "v1" as const;
export const API_BASE_PATH = "/api/v1" as const;

export * from "./solana";
export * from "./supabase";
