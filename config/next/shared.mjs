import path from "node:path";

/**
 * Shared Next.js 16 configuration for PowerChain applications.
 * App-local next.config.mjs files only declare their direct workspace packages.
 */
export function createPowerChainNextConfig({ appDir, transpilePackages = [] }) {
  if (!appDir) throw new Error("createPowerChainNextConfig requires appDir");

  const monorepoRoot = path.resolve(appDir, "../..");

  return {
    reactStrictMode: true,
    typedRoutes: true,
    poweredByHeader: false,
    compress: true,
    transpilePackages: [...new Set(transpilePackages)].sort(),
    outputFileTracingRoot: monorepoRoot,
    turbopack: {
      root: monorepoRoot,
    },
  };
}
