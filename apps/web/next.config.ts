import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  poweredByHeader: false,
  compress: true,
  transpilePackages: ["@powerchain/ui", "@powerchain/common", "@powerchain/config", "@powerchain/types"],
};
export default nextConfig;
