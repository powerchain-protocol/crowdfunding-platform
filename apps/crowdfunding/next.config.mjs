import { createPowerChainNextConfig } from "../../config/next/shared.mjs";

export default createPowerChainNextConfig({
  appDir: import.meta.dirname,
  transpilePackages: [
    "@powerchain/activity",
    "@powerchain/common",
    "@powerchain/config",
    "@powerchain/data",
    "@powerchain/deal-room",
    "@powerchain/deals",
    "@powerchain/funding",
    "@powerchain/hooks",
    "@powerchain/i18n",
    "@powerchain/identity",
    "@powerchain/realtime",
    "@powerchain/types",
    "@powerchain/ui",
  ],
});
