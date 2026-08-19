export type ContractFamily = "SOLANA_PROGRAM" | "EVM_CONTRACT" | "SAFE_ACCOUNT";
export type DeploymentStatus = "UNCONFIGURED" | "CONFIGURED" | "DEPLOYED" | "VERIFIED" | "DEPRECATED";

export interface ContractDeployment {
  key: string;
  family: ContractFamily;
  network: string;
  address: string | null;
  status: DeploymentStatus;
  explorerUrl?: string | null;
  deployedAt?: string | null;
  sourceRevision?: string | null;
}

export function isDeploymentConfigured(deployment: ContractDeployment): boolean {
  return Boolean(deployment.address?.trim()) && deployment.status !== "UNCONFIGURED";
}

export function assertDeploymentConfigured(deployment: ContractDeployment): asserts deployment is ContractDeployment & { address: string } {
  if (!isDeploymentConfigured(deployment)) {
    throw new Error(`Contract deployment ${deployment.key} is not configured for ${deployment.network}`);
  }
}

export function deploymentFromEnv(input: Omit<ContractDeployment, "address" | "status"> & { envValue?: string | undefined }): ContractDeployment {
  const address = input.envValue?.trim() || null;
  return {
    key: input.key,
    family: input.family,
    network: input.network,
    explorerUrl: input.explorerUrl ?? null,
    deployedAt: input.deployedAt ?? null,
    sourceRevision: input.sourceRevision ?? null,
    address,
    status: address ? "CONFIGURED" : "UNCONFIGURED",
  };
}
