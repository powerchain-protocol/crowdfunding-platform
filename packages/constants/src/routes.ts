export const APP_PORTS = {
  web: 3000,
  crowdfunding: 3001,
  donate: 3002,
  checkout: 3003,
  dashboard: 3004,
  treasury: 3005,
  admin: 3006,
  explorer: 3007,
  docs: 3008,
  pwa: 3009,
  api: 3010,
} as const;

export const API_V1_PREFIX = "/api/v1" as const;

export const PUBLIC_ROUTES = {
  discover: "/explore",
  projects: "/projects",
  createCampaign: "/create",
  signIn: "/auth/sign-in",
  signUp: "/auth/sign-up",
} as const;
