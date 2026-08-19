"use client";

import { useMemo, useState } from "react";
import { Button, Card, Icon, Input, Select, StatusBadge, Textarea } from "@powerchain/ui";

const steps = ["Basics", "Problem", "Goal", "Beneficiaries", "Budget", "Milestones", "Participation", "Treasury", "Evidence", "Verification", "Review & publish"] as const;

const prompts: Record<number, [string, string, string[]]> = {
  1: ["Problem Statement & Necessity", "Explain the problem, why funding is needed now, who is affected and what happens if the problem is not addressed.", ["What problem are you solving?", "Why is funding needed now?", "What evidence supports the claim?"]],
  2: ["Funding goal", "Set the target amount, accounting currency, dates and funding model.", ["Target amount", "Flexible or all-or-nothing", "Overfunding policy"]],
  3: ["Beneficiaries", "Describe who benefits, estimated reach and privacy-safe verification information.", ["Beneficiary group", "Estimated reach", "Region and verification"]],
  4: ["Budget", "Allocate the target across program delivery, equipment, logistics, operations and other budget lines.", ["Budget categories", "Amounts", "Total validation"]],
  5: ["Milestones", "Define cumulative target thresholds, completion criteria, required evidence and release limits.", ["Funding threshold", "Completion criteria", "Evidence requirement"]],
  6: ["Participation", "Choose contribution only, a non-transferable supporter attestation, or a utility ticket.", ["Contribution", "Attestation", "Ticket"]],
  7: ["Treasury", "Configure campaign treasury controls, owners, multisig threshold, settlement asset and release policy.", ["Treasury provider", "Owners and threshold", "Settlement asset"]],
  8: ["Evidence", "Choose proof requirements and publication/privacy rules for each milestone.", ["Evidence types", "Reviewer policy", "Public vs restricted"]],
  9: ["Verification", "Review organization, beneficiary, treasury and campaign verification requirements.", ["Organization", "Beneficiary", "Treasury"]],
  10: ["Review & publish", "Review campaign facts, funding policy, treasury controls and disclosures before publication.", ["Campaign completeness", "Treasury readiness", "Publish checks"]],
};

export function CreateCampaignWizard() {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [cover, setCover] = useState("");
  const canContinue = step !== 0 || (title.trim().length >= 3 && description.trim().length >= 10 && category.length > 0);
  const progress = Math.round(((step + 1) / steps.length) * 100);
  const current = steps[step] ?? "Basics";

  const content = useMemo(() => {
    if (step === 0) return <div className="grid gap-6">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="md:col-span-2 grid gap-2 text-sm font-semibold text-neutral-800">Campaign title *<Input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Flood Emergency Response" required /><span className="text-xs font-normal text-neutral-500">Use a clear, specific title people can understand at a glance.</span></label>
        <label className="md:col-span-2 grid gap-2 text-sm font-semibold text-neutral-800">Short description *<Textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Explain what is happening, who needs support and what this campaign will fund." required /><span className="text-xs font-normal text-neutral-500">Minimum 10 characters. Keep the public summary concise and factual.</span></label>
        <label className="grid gap-2 text-sm font-semibold text-neutral-800">Category *<Select value={category} onChange={(event) => setCategory(event.target.value)} required><option value="">Select category</option><option>Humanitarian</option><option>Disaster Relief</option><option>Medical</option><option>Renewables</option><option>Environment</option><option>Energy</option><option>Education</option><option>Community</option><option>Infrastructure</option><option>Technology</option><option>Public Good</option><option>Event / Ticketed</option><option>Other</option></Select></label>
        <label className="grid gap-2 text-sm font-semibold text-neutral-800">Country / region<Input value={region} onChange={(event) => setRegion(event.target.value)} placeholder="Finland / Northern Europe" /></label>
        <label className="md:col-span-2 grid gap-2 text-sm font-semibold text-neutral-800">Cover image URL<Input type="url" value={cover} onChange={(event) => setCover(event.target.value)} placeholder="https://example.org/campaign-cover.jpg" /><span className="text-xs font-normal text-neutral-500">Recommended 16:9 image. Only approved remote image domains should be enabled in production.</span></label>
      </div>
      <div className="grid gap-3 rounded-2xl border border-emerald-900/10 bg-emerald-50 p-4 sm:grid-cols-3">{[["Clear goal","Name the outcome, not just the cause."],["Specific region","Help supporters understand who benefits."],["Evidence later","Milestones and proof are configured before publish."]].map(([heading,copy])=><div key={heading}><div className="flex items-center gap-2 text-xs font-bold text-emerald-950"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-white"><Icon name="check" className="h-3 w-3"/></span>{heading}</div><p className="mt-1.5 text-xs leading-5 text-neutral-600">{copy}</p></div>)}</div>
    </div>;

    const [heading, copy, checklist] = prompts[step] ?? [current, "Complete this campaign section.", []];
    return <div className="grid gap-5 lg:grid-cols-[1fr_260px]"><div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-950"><Icon name={step === 5 ? "chart" : step === 7 ? "shield" : step === 8 ? "file" : "sparkles"}/></div><h3 className="mt-5 text-lg font-bold tracking-tight">{heading}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">{copy}</p><div className="mt-6 grid gap-3">{checklist.map((item)=><div key={item} className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-500">•</span><span className="font-medium">{item}</span></div>)}</div></div><aside className="h-fit rounded-2xl border border-neutral-200 bg-white p-5"><div className="text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">Campaign assistant</div><h4 className="mt-2 text-sm font-bold">What good looks like</h4><p className="mt-2 text-xs leading-5 text-neutral-500">Complete each section with verifiable facts. AI may suggest improvements, but campaign facts and approvals remain human-controlled.</p><div className="mt-4 rounded-xl bg-neutral-50 p-3 text-xs leading-5 text-neutral-600">Platform v1.0.0 keeps the workflow stable while individual forms can evolve behind the same API contract.</div></aside></div>;
  }, [step, title, description, category, region, cover, current]);

  return <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
    <Card className="h-fit p-4 xl:sticky xl:top-24"><div className="mb-4 flex items-center justify-between"><div><div className="text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">Campaign setup</div><div className="mt-1 text-sm font-bold">Step {step + 1} of {steps.length}</div></div><span className="text-xs font-bold text-emerald-950">{progress}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-neutral-100"><div className="h-full rounded-full bg-emerald-950 transition-all duration-300" style={{ width: `${progress}%` }} /></div><div className="mt-4 space-y-1">{steps.map((item, index) => <button key={item} type="button" onClick={() => setStep(index)} className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${index === step ? "bg-emerald-50 font-bold text-emerald-950" : index < step ? "text-neutral-700 hover:bg-neutral-50" : "text-neutral-500 hover:bg-neutral-50"}`}><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${index < step ? "bg-emerald-950 text-white" : index === step ? "border border-emerald-900/20 bg-white text-emerald-950" : "border border-neutral-200 bg-white"}`}>{index < step ? <Icon name="check" className="h-3 w-3"/> : index + 1}</span><span className="truncate">{item}</span></button>)}</div></Card>

    <Card className="overflow-hidden"><div className="border-b border-neutral-200 bg-neutral-50 px-6 py-5 sm:px-8"><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="text-[10px] font-bold uppercase tracking-[.16em] text-emerald-900">Create Campaign</div><div className="mt-2 flex items-baseline gap-2"><h1 className="text-2xl font-bold tracking-[-.03em]">{current}</h1><span className="text-sm text-neutral-400">Step {step + 1} of 11</span></div><p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">{step === 0 ? "Start with the essentials — what is this campaign called and who is it for?" : "Complete this section before moving to the next campaign control."}</p></div><StatusBadge tone="success">Draft saved locally</StatusBadge></div></div><div className="p-6 sm:p-8">{content}</div><div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-6 py-4 sm:px-8"><Button className="border border-neutral-200 bg-white !text-neutral-700 shadow-none hover:bg-neutral-100" disabled={step === 0} onClick={() => setStep((value) => Math.max(0, value - 1))}>Back</Button><div className="flex items-center gap-3"><span className="hidden text-xs text-neutral-500 sm:inline">{canContinue ? "Ready to continue" : "Complete required fields"}</span><Button disabled={!canContinue} onClick={() => setStep((value) => Math.min(steps.length - 1, value + 1))}>{step === steps.length - 1 ? "Review campaign" : <>Continue <Icon name="arrow-right"/></>}</Button></div></div></Card>
  </div>;
}
