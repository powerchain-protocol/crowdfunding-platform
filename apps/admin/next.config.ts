import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  poweredByHeader: false,
  compress: true,
  transpilePackages: ["@powerchain/activity", "@powerchain/agreements", "@powerchain/api-core", "@powerchain/audit", "@powerchain/auth", "@powerchain/campaign", "@powerchain/common", "@powerchain/config", "@powerchain/data", "@powerchain/database", "@powerchain/deal-room", "@powerchain/deals", "@powerchain/escrow", "@powerchain/events", "@powerchain/evidence", "@powerchain/funding", "@powerchain/hooks", "@powerchain/i18n", "@powerchain/identity", "@powerchain/ledger", "@powerchain/moderation", "@powerchain/notifications", "@powerchain/payment-intent", "@powerchain/proofs", "@powerchain/providers", "@powerchain/realtime", "@powerchain/reconciliation", "@powerchain/saas", "@powerchain/sdk", "@powerchain/security-data", "@powerchain/storage", "@powerchain/store", "@powerchain/treasury", "@powerchain/types", "@powerchain/ui", "@powerchain/zk"],
};
export default nextConfig;
