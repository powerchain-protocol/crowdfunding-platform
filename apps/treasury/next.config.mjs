import { createPowerChainNextConfig } from "../../config/next/shared.mjs";

export default createPowerChainNextConfig({
  appDir: import.meta.dirname,
  transpilePackages: [
    "@powerchain/agreements",
    "@powerchain/common",
    "@powerchain/config",
    "@powerchain/deals",
    "@powerchain/escrow",
    "@powerchain/proofs",
    "@powerchain/types",
    "@powerchain/ui",
  ],
});
