import { AppShell, PageHeader } from "@powerchain/ui";
import { SaaSSettings } from "../../../components/saas-settings";
export default function Page(){return <AppShell appName="SaaS Settings" nav={[{label:"Dashboard",href:"/"},{label:"Company",href:"/settings/company"},{label:"SaaS",href:"/settings/saas"}]}><PageHeader eyebrow="Workspace" title="Plan, access and usage" description="SaaS access is organization-scoped and enforced by the authenticated API. Billing-provider checkout remains adapter-controlled."/><div className="mt-7"><SaaSSettings/></div></AppShell>}
