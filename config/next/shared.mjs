import { readFileSync } from "node:fs";
import path from "node:path";

function workspaceDependencies(appDir) {
  const manifest = JSON.parse(readFileSync(path.join(appDir, "package.json"), "utf8"));
  const dependencies = {
    ...(manifest.dependencies ?? {}),
    ...(manifest.devDependencies ?? {}),
  };

  return Object.entries(dependencies)
    .filter(([name, version]) => name.startsWith("@powerchain/") && String(version).startsWith("workspace:"))
    .map(([name]) => name)
    .sort();
}

/**
 * Shared Next.js 16 configuration for PowerChain applications.
 * Workspace packages are derived from the app manifest so app-local config cannot drift.
 */
export function createPowerChainNextConfig({ appDir, transpilePackages } = {}) {
  if (!appDir) throw new Error("createPowerChainNextConfig requires appDir");

  const monorepoRoot = path.resolve(appDir, "../..");
  const packages = transpilePackages ?? workspaceDependencies(appDir);

  return {
    reactStrictMode: true,
    typedRoutes: true,
    poweredByHeader: false,
    compress: true,
    transpilePackages: [...new Set(packages)].sort(),
    outputFileTracingRoot: monorepoRoot,
    turbopack: {
      root: monorepoRoot,
    },
  };
}
