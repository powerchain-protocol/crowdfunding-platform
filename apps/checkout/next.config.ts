import type { NextConfig } from "next";
const nextConfig: NextConfig = { reactStrictMode: true, transpilePackages: ["@powerchain/ui", "@powerchain/common", "@powerchain/config", "@powerchain/types"] };
export default nextConfig;
