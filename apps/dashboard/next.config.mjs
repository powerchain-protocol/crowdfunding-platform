import { createPowerChainNextConfig } from "../../config/next/shared.mjs";

export default createPowerChainNextConfig({
  appDir: import.meta.dirname,
  transpilePackages: [
    "@powerchain/agreements",
    "@powerchain/common",
    "@powerchain/config",
    "@powerchain/data",
    "@powerchain/deal-room",
    "@powerchain/deals",
    "@powerchain/evidence",
    "@powerchain/hooks",
    "@powerchain/i18n",
    "@powerchain/identity",
    "@powerchain/notifications",
    "@powerchain/proofs",
    "@powerchain/types",
    "@powerchain/ui",
  ],
});
