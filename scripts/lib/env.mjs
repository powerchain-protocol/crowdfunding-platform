import { existsSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

export function repoRootFrom(importMetaUrl) {
  return resolve(new URL("../..", importMetaUrl).pathname);
}

export function envCandidates(root = process.cwd()) {
  const explicit = process.env.POWERCHAIN_ENV_FILE?.trim();
  return [
    explicit ? resolve(root, explicit) : null,
    resolve(root, ".env.local"),
    resolve(root, ".env"),
  ].filter(Boolean);
}

export function findEnvFile(root = process.cwd()) {
  return envCandidates(root).find((file) => existsSync(file)) ?? null;
}

export function loadPowerChainEnv(root = process.cwd()) {
  const file = findEnvFile(root);
  if (!file) return null;
  try {
    process.loadEnvFile(file);
    return file;
  } catch (error) {
    console.error(`Failed to load environment file ${file}: ${error instanceof Error ? error.message : error}`);
    process.exit(1);
  }
}
