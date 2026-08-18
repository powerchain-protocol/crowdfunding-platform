import { AppShell, PageHeader } from "@powerchain/ui";
import { EvidenceSubmissionFlow } from "../../../../../../components/evidence-submission-flow";

export default function Page() {
  return <AppShell appName="Organizer Dashboard" nav={[{ label: "Dashboard", href: "/" }, { label: "Campaigns", href: "/campaigns" }, { label: "Treasury", href: "http://localhost:3005" }]}><PageHeader eyebrow="Milestone evidence" title="Verify proof before funds can move" description="Operators attach proof, reviewers verify it, and the treasury release gate stays closed until evidence and milestone policy requirements are satisfied." /><div className="mt-8"><EvidenceSubmissionFlow /></div></AppShell>;
}
