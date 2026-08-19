import { AppShell, PageHeader } from "@powerchain/ui";
import { CompanyProfileForm } from "../../../components/company-profile-form";

export default function CompanySettingsPage() {
  return <AppShell appName="Organization Settings" notificationCount={3} nav={[{ label: "Dashboard", href: "/" }, { label: "Company", href: "/settings/company" }, { label: "Trust", href: "/trust" }, { label: "Invoices", href: "/invoices" }]}> 
    <PageHeader eyebrow="Settings · Company" title="Company & foundation profile" description="Maintain the legal entity, brand, billing identity, registered address, foundation details and public social links used throughout PowerChain." />
    <div className="mt-7"><CompanyProfileForm /></div>
  </AppShell>;
}
