import { AppShell, PageHeader, StatusBadge } from "@powerchain/ui";
import { CapitalMarketplace } from "../../components/capital-marketplace";
import { listingFixtures } from "../../lib/listings";

export default function Page() {
  return <AppShell appName="Capital Marketplace" nav={[{label:"Crowdfunding",href:"/"},{label:"Marketplace",href:"/marketplace"},{label:"Watchlist",href:"/watchlist"},{label:"Founder listing",href:"http://localhost:3004/founder/listing"}]}>
    <PageHeader eyebrow="Founders × investors" title="Structured raises. Evidence-gated capital." description="Browse founder listings with verified business checks, deal terms, milestone tranches and escrow release conditions. Investment products can carry regulatory obligations; eligibility and offering workflows must be configured per jurisdiction." action={<StatusBadge tone="success">3 listings</StatusBadge>}/>
    <div className="mt-7"><CapitalMarketplace listings={listingFixtures}/></div>
  </AppShell>;
}
