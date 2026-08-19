import { createPowerChainNextConfig } from "../../config/next/shared.mjs";

export default createPowerChainNextConfig({
  appDir: import.meta.dirname,
  transpilePackages: [
    "@powerchain/activity",
    "@powerchain/common",
    "@powerchain/config",
    "@powerchain/types",
    "@powerchain/ui",
  ],
});
