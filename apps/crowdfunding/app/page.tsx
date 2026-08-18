import { AppShell, PageHeader, Section } from "@powerchain/ui";
import { CampaignGrid } from "../components/campaign-grid";

export default function Page() {
  return <AppShell appName="Crowdfunding" nav={[{ label: "Explore projects", href: "/explore" }, { label: "Projects", href: "/projects" }, { label: "Create", href: "/create" }, { label: "Transparency", href: "http://localhost:3007" }]}><PageHeader eyebrow="Crowdfunding" title="Fund work you can follow." description="Explore humanitarian, disaster-relief, renewable-energy, public-good and ticketed utility projects with transparent treasury and milestone evidence." action={<a href="/create" className="rounded-xl bg-emerald-950 px-4 py-2.5 text-sm font-bold text-white">Create campaign</a>} /><Section title="Active projects" description="Funding totals are presented separately from treasury availability and disbursements."><CampaignGrid /></Section></AppShell>;
}
