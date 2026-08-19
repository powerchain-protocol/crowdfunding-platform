import { createPowerChainNextConfig } from "../../config/next/shared.mjs";

export default createPowerChainNextConfig({
  appDir: import.meta.dirname,
  transpilePackages: [
    "@powerchain/audit",
    "@powerchain/common",
    "@powerchain/config",
    "@powerchain/identity",
    "@powerchain/moderation",
    "@powerchain/types",
    "@powerchain/ui",
  ],
});
