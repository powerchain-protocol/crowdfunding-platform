/**
 * Canonical Next.js application inventory for PowerChain Crowdfunding v1.0.0.
 * Keep app identity/ports here instead of duplicating lists across scripts.
 */
export const POWERCHAIN_APPS = Object.freeze([
  { dir: "web", packageName: "@powerchain/web", port: 3000 },
  { dir: "crowdfunding", packageName: "@powerchain/crowdfunding", port: 3001 },
  { dir: "donate", packageName: "@powerchain/donate", port: 3002 },
  { dir: "checkout", packageName: "@powerchain/checkout", port: 3003 },
  { dir: "dashboard", packageName: "@powerchain/dashboard", port: 3004 },
  { dir: "treasury", packageName: "@powerchain/treasury-app", port: 3005 },
  { dir: "admin", packageName: "@powerchain/admin", port: 3006 },
  { dir: "explorer", packageName: "@powerchain/explorer", port: 3007 },
  { dir: "docs", packageName: "@powerchain/docs-app", port: 3008 },
  { dir: "pwa", packageName: "@powerchain/pwa", port: 3009 },
  { dir: "api", packageName: "@powerchain/api", port: 3010 },
]);

export const POWERCHAIN_APP_DIRS = Object.freeze(POWERCHAIN_APPS.map((app) => app.dir));
