import { deploymentFromEnv } from "@powerchain/contracts/deployments";

function booleanEnv(name: string): boolean {
  return process.env[name] === "true";
}

export async function GET() {
  const network = process.env.POWERCHAIN_NETWORK === "mainnet" ? "mainnet-beta" : "devnet";
  const solana = [
    ["crowdfunding", "CROWDFUNDING_PROGRAM_ID", "CROWDFUNDING_PROGRAM_VERIFIED"],
    ["registry", "REGISTRY_PROGRAM_ID", "REGISTRY_PROGRAM_VERIFIED"],
    ["contributors", "CONTRIBUTORS_PROGRAM_ID", "CONTRIBUTORS_PROGRAM_VERIFIED"],
    ["milestone-escrow", "SOLANA_MILESTONE_ESCROW_PROGRAM_ID", "SOLANA_MILESTONE_ESCROW_VERIFIED"],
  ] as const;

  return Response.json({
    data: {
      network,
      deployments: solana.map(([key, addressEnv, verifiedEnv]) => {
        const deployment = deploymentFromEnv({
          key,
          family: "SOLANA_PROGRAM",
          network,
          envValue: process.env[addressEnv],
        });
        return {
          key: deployment.key,
          family: deployment.family,
          network: deployment.network,
          configured: Boolean(deployment.address),
          verified: Boolean(deployment.address) && booleanEnv(verifiedEnv),
        };
      }),
    },
  });
}
