import { AppShell } from "@powerchain/ui";
import { CreateCampaignWizard } from "../../components/create-campaign-wizard";

export default function Page() {
  return <AppShell appName="Create Campaign" nav={[{ label: "Explore projects", href: "/explore" }, { label: "My projects", href: "/projects" }]}><CreateCampaignWizard /></AppShell>;
}
