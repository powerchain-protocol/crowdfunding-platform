"use client";

import { useMemo, useState } from "react";
import { Button, Card, Input, Select, StatusBadge, Textarea } from "@powerchain/ui";

type FileEvidence = { name: string; size: number; type: string; sha256: string; status: "ATTACHED" | "SUBMITTED" | "VERIFIED" | "REJECTED" };

async function hashFile(file: File) {
  const data = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function EvidenceSubmissionFlow() {
  const [kind, setKind] = useState("INVOICE");
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<FileEvidence[]>([]);
  const [busy, setBusy] = useState(false);
  const [milestoneApproved, setMilestoneApproved] = useState(false);

  const allVerified = files.length > 0 && files.every((file) => file.status === "VERIFIED");
  const canRelease = allVerified && milestoneApproved;

  const attach = async (list: FileList | null) => {
    if (!list?.length) return;
    setBusy(true);
    const next: FileEvidence[] = [];
    for (const file of Array.from(list)) {
      next.push({ name: file.name, size: file.size, type: file.type || "application/octet-stream", sha256: await hashFile(file), status: "ATTACHED" });
    }
    setFiles((current) => [...current, ...next]);
    setBusy(false);
  };

  const status = useMemo(() => {
    if (canRelease) return { label: "Release gate satisfied", tone: "success" as const };
    if (files.some((file) => file.status === "SUBMITTED")) return { label: "Verification required", tone: "warning" as const };
    return { label: "Evidence required", tone: "neutral" as const };
  }, [canRelease, files]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <Card className="p-6">
        <div className="flex items-center justify-between gap-4"><div><h2 className="text-xl font-bold">Attach milestone proof</h2><p className="mt-1 text-sm text-slate-500">Files are hashed in the browser before submission. Sensitive originals belong in encrypted object storage; only references and commitments should be published.</p></div><StatusBadge tone={status.tone}>{status.label}</StatusBadge></div>
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2 text-sm font-semibold">Evidence type<Select value={kind} onChange={(event) => setKind(event.target.value)}><option value="INVOICE">Invoice</option><option value="RECEIPT">Receipt</option><option value="PHOTO">Photo</option><option value="DOCUMENT">Document</option><option value="VENDOR_CONFIRMATION">Vendor confirmation</option><option value="BENEFICIARY_CONFIRMATION">Beneficiary confirmation</option></Select></label>
          <label className="grid gap-2 text-sm font-semibold">Proof documents<Input type="file" multiple accept="image/*,.pdf,.doc,.docx" onChange={(event) => void attach(event.target.files)} disabled={busy} /><span className="text-xs font-normal text-slate-500">PDF, image or document. Production upload must use signed object-storage URLs and server-side malware/content validation.</span></label>
          <label className="grid gap-2 text-sm font-semibold">Operator notes<Textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Explain what this evidence proves and which budget line or milestone criterion it supports." /></label>
        </div>
        <div className="mt-6 space-y-3">
          {files.length === 0 ? <div className="rounded-xl border border-dashed p-6 text-center text-sm text-slate-500">No proof documents attached yet.</div> : files.map((file, index) => <div key={`${file.name}-${index}`} className="rounded-xl border p-4"><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div className="min-w-0"><div className="truncate text-sm font-semibold">{file.name}</div><div className="mt-1 text-xs text-slate-500">{(file.size / 1024).toFixed(1)} KB · {file.type}</div><div className="mt-2 truncate font-mono text-[10px] text-slate-500" title={file.sha256}>SHA-256 {file.sha256}</div></div><StatusBadge tone={file.status === "VERIFIED" ? "success" : file.status === "REJECTED" ? "danger" : file.status === "SUBMITTED" ? "warning" : "neutral"}>{file.status}</StatusBadge></div></div>)}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button disabled={!files.length || busy || files.every((file) => file.status !== "ATTACHED")} onClick={() => setFiles((current) => current.map((file) => file.status === "ATTACHED" ? { ...file, status: "SUBMITTED" } : file))}>Submit evidence</Button>
          <Button className="border bg-white !text-emerald-900 hover:bg-emerald-50" disabled={!files.some((file) => file.status === "SUBMITTED")} onClick={() => setFiles((current) => current.map((file) => file.status === "SUBMITTED" ? { ...file, status: "VERIFIED" } : file))}>Reviewer: verify proof</Button>
        </div>
      </Card>
      <div className="space-y-4">
        <Card className="p-5"><div className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">Milestone M2</div><h3 className="mt-2 font-bold">Deploy emergency water equipment</h3><dl className="mt-4 grid grid-cols-[1fr_auto] gap-y-3 text-sm"><dt className="text-slate-500">Disbursement</dt><dd className="font-semibold">€30,000</dd><dt className="text-slate-500">Evidence policy</dt><dd className="font-semibold">Required</dd><dt className="text-slate-500">Treasury policy</dt><dd className="font-semibold">2-of-3</dd></dl></Card>
        <Card className="p-5"><h3 className="font-bold">Release controls</h3><div className="mt-4 space-y-3 text-sm"><div className="flex items-center justify-between"><span>Proof attached</span><StatusBadge tone={files.length ? "success" : "warning"}>{files.length ? "Yes" : "No"}</StatusBadge></div><div className="flex items-center justify-between"><span>Proof verified</span><StatusBadge tone={allVerified ? "success" : "warning"}>{allVerified ? "Verified" : "Pending"}</StatusBadge></div><label className="flex items-center justify-between gap-4"><span>Milestone approval</span><input type="checkbox" checked={milestoneApproved} onChange={(event) => setMilestoneApproved(event.target.checked)} className="h-4 w-4 accent-emerald-900" /></label></div><Button className="mt-5 w-full" disabled={!canRelease} onClick={() => alert("Release proposal prepared. Multisig signatures are still required before execution.")}>Prepare fund release</Button>{!canRelease ? <p className="mt-3 text-xs leading-5 text-slate-500">Funds remain locked until required proof is verified and the milestone is approved. Verification does not bypass multisig or treasury policy.</p> : <p className="mt-3 text-xs leading-5 text-emerald-800">Evidence gate satisfied. The next step creates a treasury proposal; it does not sign or execute funds automatically.</p>}</Card>
      </div>
    </div>
  );
}
