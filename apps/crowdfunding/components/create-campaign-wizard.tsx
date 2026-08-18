"use client";

import { useMemo, useState } from "react";
import { Button, Card, Input, Select, StatusBadge, Textarea } from "@powerchain/ui";

const steps = ["Basics", "Problem", "Goal", "Beneficiaries", "Budget", "Milestones", "Participation", "Treasury", "Evidence", "Verification", "Review & publish"] as const;

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
    if (step === 0) return <div className="grid gap-5">
      <label className="grid gap-2 text-sm font-semibold">Campaign title *<Input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Flood Emergency Response" required /></label>
      <label className="grid gap-2 text-sm font-semibold">Short description *<Textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Explain what is happening, who needs support and what the campaign will fund." required /></label>
      <label className="grid gap-2 text-sm font-semibold">Category *<Select value={category} onChange={(event) => setCategory(event.target.value)} required><option value="">Select category</option><option>Humanitarian</option><option>Disaster Relief</option><option>Medical</option><option>Renewables</option><option>Environment</option><option>Energy</option><option>Education</option><option>Community</option><option>Infrastructure</option><option>Technology</option><option>Public Good</option><option>Event / Ticketed</option><option>Other</option></Select></label>
      <label className="grid gap-2 text-sm font-semibold">Country / region<Input value={region} onChange={(event) => setRegion(event.target.value)} placeholder="Finland / Northern Europe" /></label>
      <label className="grid gap-2 text-sm font-semibold">Cover image URL<Input type="url" value={cover} onChange={(event) => setCover(event.target.value)} placeholder="https://…" /></label>
    </div>;
    const prompts: Record<number, [string, string]> = {
      1: ["Problem Statement & Necessity", "Explain the problem, why funding is needed now, who is affected and what happens if the problem is not addressed."],
      2: ["Funding goal", "Set target amount, accounting currency, campaign dates and flexible or all-or-nothing funding policy."],
      3: ["Beneficiaries", "Describe who benefits, estimated reach and privacy-safe verification information."],
      4: ["Budget", "Allocate the target across program, equipment, logistics, operations and other budget lines."],
      5: ["Milestones", "Define cumulative target thresholds, completion criteria, evidence requirements and disbursement limits."],
      6: ["Participation", "Choose contribution only, a non-transferable supporter attestation, or a utility ticket."],
      7: ["Treasury", "Configure the campaign treasury, owners, multisig threshold, settlement asset and release policy."],
      8: ["Evidence", "Choose required proof types and publication/privacy rules for milestone verification."],
      9: ["Verification", "Review identity, organization, beneficiary, treasury and campaign verification requirements."],
      10: ["Review & publish", "Review campaign facts, funding policy, treasury controls and public disclosures before publication."],
    };
    const [heading, copy] = prompts[step] ?? [current, "Complete this campaign section."];
    return <div className="rounded-2xl border bg-slate-50 p-6"><h3 className="font-bold">{heading}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{copy}</p><p className="mt-5 text-xs text-slate-500">This v1.3 scaffold establishes the 11-step workflow and validation boundary. Domain-specific forms can be wired to `/api/v1/campaigns/:id` without changing the journey.</p></div>;
  }, [step, title, description, category, region, cover, current]);

  return <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
    <Card className="h-fit p-4"><div className="mb-4 flex items-center justify-between text-xs"><span className="font-bold">Campaign setup</span><span className="text-slate-500">{progress}%</span></div><div className="h-1.5 rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-950 transition-all" style={{ width: `${progress}%` }} /></div><div className="mt-4 space-y-1">{steps.map((item, index) => <button key={item} type="button" onClick={() => setStep(index)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${index === step ? "bg-emerald-50 font-bold text-emerald-900" : index < step ? "text-slate-700" : "text-slate-500"}`}><span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${index < step ? "bg-emerald-900 text-white" : "border"}`}>{index < step ? "✓" : index + 1}</span>{item}</button>)}</div></Card>
    <Card className="p-6 sm:p-8"><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">Create Campaign</div><h1 className="mt-2 text-2xl font-bold">Step {step + 1} of 11</h1><div className="mt-1 text-sm font-semibold">{current}</div></div><StatusBadge tone="success">Draft</StatusBadge></div><div className="mt-6 border-b pb-5"><h2 className="text-xl font-bold">{step === 0 ? "Tell us about your campaign" : current}</h2><p className="mt-1 text-sm leading-6 text-slate-500">{step === 0 ? "Start with the essentials — what is this campaign called and who is it for?" : "Complete this section before moving to the next campaign control."}</p></div><div className="mt-6">{content}</div><div className="mt-8 flex items-center justify-between border-t pt-5"><Button className="border bg-white !text-slate-700 hover:bg-slate-50" disabled={step === 0} onClick={() => setStep((value) => Math.max(0, value - 1))}>Back</Button><Button disabled={!canContinue} onClick={() => setStep((value) => Math.min(steps.length - 1, value + 1))}>{step === steps.length - 1 ? "Review campaign" : "Continue"}</Button></div></Card>
  </div>;
}
