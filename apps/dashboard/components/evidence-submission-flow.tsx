"use client";

import { useMemo, useState } from "react";
import { canReleaseMilestoneFunds, getMilestoneReleaseBlockers, type EvidenceKind, type MilestoneReleaseGate } from "@powerchain/evidence";
import { Button, Card, Icon, Input, Select, StatusBadge, Textarea } from "@powerchain/ui";

type FileEvidence = {
  name: string;
  size: number;
  type: string;
  sha256: string;
  kind: EvidenceKind;
  status: "ATTACHED" | "SUBMITTED" | "VERIFIED" | "REJECTED";
};

const MAX_FILE_BYTES = 15 * 1024 * 1024;

async function hashFile(file: File) {
  const data = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function EvidenceSubmissionFlow() {
  const [kind, setKind] = useState<EvidenceKind>("INVOICE");
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<FileEvidence[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [milestoneApproved, setMilestoneApproved] = useState(false);
  const [treasuryPolicyApproved, setTreasuryPolicyApproved] = useState(false);
  const [proposalPrepared, setProposalPrepared] = useState(false);

  const releaseGate = useMemo<MilestoneReleaseGate>(() => ({
    milestoneId: "m2",
    requiredEvidenceCount: 1,
    milestoneApproved,
    treasuryPolicyApproved,
    evidence: files.map((file, index) => ({
      id: `local_${index}_${file.sha256.slice(0, 10)}`,
      campaignId: "cmp_flood",
      milestoneId: "m2",
      kind: file.kind,
      fileName: file.name,
      contentType: file.type,
      sizeBytes: file.size,
      sha256: file.sha256,
      status: file.status === "ATTACHED" ? "DRAFT" : file.status === "SUBMITTED" ? "UNDER_REVIEW" : file.status,
      submittedBy: "current-operator",
    })),
  }), [files, milestoneApproved, treasuryPolicyApproved]);

  const blockers = useMemo(() => getMilestoneReleaseBlockers(releaseGate), [releaseGate]);
  const canRelease = canReleaseMilestoneFunds(releaseGate);
  const allVerified = files.length > 0 && files.every((file) => file.status === "VERIFIED");
  const submittedCount = files.filter((file) => file.status === "SUBMITTED" || file.status === "VERIFIED").length;

  const attach = async (list: FileList | null) => {
    if (!list?.length) return;
    setBusy(true);
    setError(null);
    try {
      const next: FileEvidence[] = [];
      for (const file of Array.from(list)) {
        if (file.size > MAX_FILE_BYTES) throw new Error(`${file.name} exceeds the 15 MB evidence-file limit.`);
        const sha256 = await hashFile(file);
        if ([...files, ...next].some((current) => current.sha256 === sha256)) continue;
        next.push({ name: file.name, size: file.size, type: file.type || "application/octet-stream", sha256, kind, status: "ATTACHED" });
      }
      setFiles((current) => [...current, ...next]);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Evidence could not be attached.");
    } finally {
      setBusy(false);
    }
  };

  const status = useMemo(() => {
    if (proposalPrepared) return { label: "Proposal prepared", tone: "success" as const };
    if (canRelease) return { label: "Release gate satisfied", tone: "success" as const };
    if (files.some((file) => file.status === "SUBMITTED")) return { label: "Reviewer action required", tone: "warning" as const };
    return { label: "Evidence required", tone: "neutral" as const };
  }, [proposalPrepared, canRelease, files]);

  return <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
    <Card className="overflow-hidden">
      <div className="border-b border-neutral-200 bg-neutral-50 p-6"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-950"><Icon name="file" className="h-5 w-5"/></span><div><h2 className="text-xl font-bold tracking-tight">Milestone evidence</h2><p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-500">Attach proof, submit it for review and keep the treasury release gate closed until verification is complete.</p></div></div><StatusBadge tone={status.tone}>{status.label}</StatusBadge></div></div>
      <div className="p-6">
        <div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-neutral-800">Evidence type<Select value={kind} onChange={(event) => setKind(event.target.value as EvidenceKind)}><option value="INVOICE">Invoice</option><option value="RECEIPT">Receipt</option><option value="PHOTO">Photo</option><option value="DOCUMENT">Document</option><option value="VENDOR_CONFIRMATION">Vendor confirmation</option><option value="BENEFICIARY_CONFIRMATION">Beneficiary confirmation</option></Select></label><div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3"><div className="text-[10px] font-bold uppercase tracking-[.12em] text-neutral-400">Evidence status</div><div className="mt-2 text-sm font-semibold">{files.length} attached · {submittedCount} submitted</div><div className="mt-1 text-xs text-neutral-500">SHA-256 commitments are calculated before submission.</div></div></div>

        <label className="mt-5 block cursor-pointer rounded-2xl border-2 border-dashed border-neutral-200 bg-neutral-50 p-7 text-center transition hover:border-emerald-800/40 hover:bg-emerald-50"><input className="sr-only" type="file" multiple accept="image/*,.pdf,.doc,.docx" onChange={(event) => void attach(event.target.files)} disabled={busy}/><span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-950 shadow-sm"><Icon name="file" className="h-5 w-5"/></span><span className="mt-3 block text-sm font-bold">{busy ? "Hashing evidence…" : "Choose proof documents"}</span><span className="mt-1 block text-xs text-neutral-500">PDF, image or document · maximum 15 MB each · duplicates ignored by content hash</span></label>

        <label className="mt-5 grid gap-2 text-sm font-semibold text-neutral-800">Operator notes<Textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Explain what the evidence proves, which milestone criterion it satisfies and any relevant budget line." /></label>
        {error ? <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</div> : null}

        <div className="mt-6 space-y-3">{files.length === 0 ? <div className="rounded-xl border border-neutral-200 bg-white p-5 text-center text-sm text-neutral-500">No proof documents attached yet.</div> : files.map((file,index)=><div key={`${file.sha256}-${index}`} className="rounded-xl border border-neutral-200 bg-white p-4"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600"><Icon name="file" className="h-4 w-4"/></span><div className="min-w-0"><div className="truncate text-sm font-semibold">{file.name}</div><div className="mt-1 text-xs text-neutral-500">{file.kind.replaceAll("_", " ")} · {(file.size/1024).toFixed(1)} KB</div><div className="mt-1 max-w-[560px] truncate font-mono text-[9px] text-neutral-400" title={file.sha256}>SHA-256 {file.sha256}</div></div></div><div className="flex shrink-0 items-center gap-2"><StatusBadge tone={file.status === "VERIFIED" ? "success" : file.status === "REJECTED" ? "danger" : file.status === "SUBMITTED" ? "warning" : "neutral"}>{file.status}</StatusBadge>{file.status === "ATTACHED" ? <button type="button" className="rounded-lg px-2 py-1 text-xs font-semibold text-neutral-500 transition hover:bg-red-50 hover:text-red-800" onClick={() => setFiles((current) => current.filter((_,itemIndex)=>itemIndex!==index))}>Remove</button> : null}</div></div></div>)}</div>

        <div className="mt-6 flex flex-wrap gap-3"><Button disabled={!files.length || busy || files.every((file)=>file.status!=="ATTACHED")} onClick={()=>setFiles((current)=>current.map((file)=>file.status==="ATTACHED"?{...file,status:"SUBMITTED"}:file))}>Submit evidence <Icon name="arrow-right"/></Button><Button className="border border-neutral-200 bg-white !text-neutral-800 shadow-none hover:bg-neutral-50" disabled={!files.some((file)=>file.status==="SUBMITTED")} onClick={()=>setFiles((current)=>current.map((file)=>file.status==="SUBMITTED"?{...file,status:"VERIFIED"}:file))}><Icon name="check"/> Reviewer: verify proof</Button></div>
      </div>
    </Card>

    <div className="space-y-4 xl:sticky xl:top-24 xl:h-fit"><Card className="p-5"><div className="flex items-start justify-between gap-3"><div><div className="text-[10px] font-bold uppercase tracking-[.14em] text-emerald-900">Milestone M2</div><h3 className="mt-2 font-bold tracking-tight">Deploy emergency water equipment</h3></div><StatusBadge tone="warning">Pending</StatusBadge></div><dl className="mt-5 grid grid-cols-[1fr_auto] gap-y-3 text-sm"><dt className="text-neutral-500">Disbursement</dt><dd className="font-semibold">€30,000</dd><dt className="text-neutral-500">Evidence policy</dt><dd className="font-semibold">Required</dd><dt className="text-neutral-500">Treasury policy</dt><dd className="font-semibold">2-of-3</dd></dl></Card>

      <Card className="overflow-hidden"><div className="border-b border-neutral-200 p-5"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-950"><Icon name="lock"/></span><div><h3 className="font-bold">Release controls</h3><p className="mt-1 text-xs text-neutral-500">All gates must pass before proposal preparation.</p></div></div></div><div className="p-5"><div className="space-y-3 text-sm">{[["Proof attached", files.length > 0],["Proof verified", allVerified]].map(([label,ok])=><div key={String(label)} className="flex items-center justify-between gap-3"><span>{String(label)}</span><StatusBadge tone={ok ? "success" : "warning"}>{ok ? "Complete" : "Pending"}</StatusBadge></div>)}<label className="flex items-center justify-between gap-4 rounded-xl bg-neutral-50 px-3 py-2.5"><span>Milestone approval</span><input type="checkbox" checked={milestoneApproved} onChange={(event)=>setMilestoneApproved(event.target.checked)} className="h-4 w-4 accent-emerald-950"/></label><label className="flex items-center justify-between gap-4 rounded-xl bg-neutral-50 px-3 py-2.5"><span>Treasury policy approval</span><input type="checkbox" checked={treasuryPolicyApproved} onChange={(event)=>setTreasuryPolicyApproved(event.target.checked)} className="h-4 w-4 accent-emerald-950"/></label></div>
        {blockers.length ? <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3"><div className="text-[10px] font-bold uppercase tracking-[.12em] text-neutral-400">Release blockers</div><ul className="mt-2 space-y-1 text-xs leading-5 text-neutral-600">{blockers.map((blocker)=><li key={blocker} className="flex gap-2"><span>•</span><span>{blocker}</span></li>)}</ul></div> : <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold leading-5 text-emerald-950">All release gates are satisfied. A treasury proposal may now be prepared.</div>}
        <Button className="mt-5 w-full" disabled={!canRelease || proposalPrepared} onClick={()=>setProposalPrepared(true)}>{proposalPrepared ? <><Icon name="check"/> Proposal prepared</> : <><Icon name="shield"/> Prepare fund release</>}</Button><p className="mt-3 text-xs leading-5 text-neutral-500">Preparing a proposal does not sign or execute funds. Configured treasury approvals remain required.</p></div></Card>
    </div>
  </div>;
}
