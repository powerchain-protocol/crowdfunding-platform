"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card, Icon, StatusBadge } from "@powerchain/ui";
import { useLocale } from "@powerchain/ui/locale-provider";
import { capitalText } from "@powerchain/i18n";
import { clampRealtimePollInterval, type DealRoomMessage } from "@powerchain/deal-room";

type ApiMessage = DealRoomMessage & { senderName: string };

export function DealRoomLive({ roomId, initialMessages }: { roomId: string; initialMessages: ApiMessage[] }) {
  const { locale } = useLocale();
  const t = capitalText(locale);
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [attachmentStatus, setAttachmentStatus] = useState<string | null>(null);
  const [callStatus, setCallStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const interval = useMemo(() => clampRealtimePollInterval(Number(process.env.NEXT_PUBLIC_DEAL_ROOM_POLL_INTERVAL_MS ?? 5000)), []);

  useEffect(() => {
    let active = true;
    const poll = async () => {
      try {
        const response = await fetch(`/api/v1/deal-rooms/${encodeURIComponent(roomId)}/messages`, { headers: { accept: "application/json" }, cache: "no-store" });
        if (!response.ok) return;
        const payload = await response.json() as { data?: ApiMessage[] };
        if (active && payload.data) setMessages(payload.data);
      } catch { /* degraded polling is reflected by unchanged activity */ }
    };
    const timer = window.setInterval(poll, interval);
    return () => { active = false; window.clearInterval(timer); };
  }, [roomId, interval]);

  const submit = async () => {
    const body = draft.trim();
    if (!body) return;
    setStatus("sending");
    try {
      const response = await fetch(`/api/v1/deal-rooms/${encodeURIComponent(roomId)}/messages`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ kind: "TEXT", body }) });
      if (!response.ok) { setStatus("error"); return; }
      setDraft("");
      setStatus("idle");
    } catch { setStatus("error"); }
  };


  const shareFile = async (file: File) => {
    const maxBytes = 100 * 1024 * 1024;
    if (file.size <= 0 || file.size > maxBytes) { setAttachmentStatus("File must be between 1 byte and 100 MB."); return; }
    const allowed = file.type.startsWith("image/") || file.type.startsWith("video/") || ["application/pdf","text/plain","application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type);
    if (!allowed) { setAttachmentStatus("Unsupported file type."); return; }
    setAttachmentStatus("Hashing attachment…");
    const digest = await crypto.subtle.digest("SHA-256", await file.arrayBuffer());
    const sha256 = Array.from(new Uint8Array(digest)).map((byte)=>byte.toString(16).padStart(2,"0")).join("");
    const response = await fetch(`/api/v1/deal-rooms/${encodeURIComponent(roomId)}/attachments`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ fileName:file.name, contentType:file.type, sizeBytes:file.size, sha256 }) }).catch(()=>null);
    if (!response?.ok) { setAttachmentStatus(`Prepared ${file.name} · ${sha256.slice(0,12)}… · upload requires private storage configuration.`); return; }
    setAttachmentStatus(`${file.name} queued for secure upload.`);
  };

  const scheduleCall = async () => {
    setCallStatus("Preparing call…");
    const response = await fetch(`/api/v1/deal-rooms/${encodeURIComponent(roomId)}/calls`, { method:"POST", headers:{"content-type":"application/json"}, body: JSON.stringify({ startsAt:new Date(Date.now()+15*60_000).toISOString() }) }).catch(()=>null);
    if (!response?.ok) { setCallStatus("Video provider is not configured; no meeting was created."); return; }
    setCallStatus("Video call created.");
  };

  return <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b p-4"><div><h2 className="font-bold">{t.dealRoom}</h2><p className="mt-1 text-xs text-neutral-500">{locale === "es" ? `Actualización cada ${Math.round(interval/1000)} s` : `Polling every ${Math.round(interval/1000)}s`}</p></div><StatusBadge tone="success">{locale === "es" ? "Participantes verificados" : "Verified participants"}</StatusBadge></div>
      <div className="max-h-[520px] min-h-[360px] space-y-4 overflow-y-auto p-5">{messages.map((message)=><div key={message.id} className="flex gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-xs font-bold">{message.senderName.slice(0,2).toUpperCase()}</span><div className="min-w-0"><div className="flex items-center gap-2"><span className="text-sm font-bold">{message.senderName}</span><span className="text-[10px] text-neutral-400">{new Date(message.createdAt).toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}</span></div><div className="mt-1 rounded-2xl rounded-tl-md bg-neutral-100 px-3.5 py-2.5 text-sm leading-6">{message.body}</div></div></div>)}</div>
      <div className="border-t bg-neutral-50 p-4"><div className="flex gap-2"><input value={draft} onChange={(event)=>setDraft(event.target.value)} onKeyDown={(event)=>{ if(event.key==="Enter") void submit(); }} placeholder={locale === "es" ? "Escribe un mensaje…" : "Write a message…"} className="h-11 flex-1 rounded-xl border bg-white px-3 text-sm outline-none focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10"/><button type="button" onClick={()=>void submit()} disabled={status==="sending"} className="rounded-xl bg-emerald-950 px-4 text-sm font-bold text-white">{status==="sending" ? "…" : (locale === "es" ? "Enviar" : "Send")}</button></div>{status==="error"?<p className="mt-2 text-xs text-red-700">{locale === "es" ? "El envío requiere autenticación y persistencia configuradas." : "Sending requires configured authentication and persistence."}</p>:null}</div>
    </Card>
    <div className="space-y-4">
      <Card className="p-5"><h3 className="font-bold">{locale === "es" ? "Colaboración" : "Collaboration"}</h3><input ref={fileInputRef} type="file" className="hidden" accept="application/pdf,text/plain,.docx,image/*,video/*" onChange={(event)=>{const file=event.target.files?.[0]; if(file) void shareFile(file); event.currentTarget.value="";}}/><div className="mt-4 grid gap-2"><button type="button" onClick={()=>fileInputRef.current?.click()} className="flex h-11 items-center gap-3 rounded-xl border bg-white px-3 text-sm font-semibold"><Icon name="upload"/> {locale === "es" ? "Compartir documento/foto/video" : "Share document/photo/video"}</button><button type="button" onClick={()=>void scheduleCall()} className="flex h-11 items-center gap-3 rounded-xl border bg-white px-3 text-sm font-semibold"><Icon name="video"/> {locale === "es" ? "Programar videollamada" : "Schedule video call"}</button></div>{attachmentStatus?<p className="mt-3 text-[11px] leading-5 text-neutral-500">{attachmentStatus}</p>:null}{callStatus?<p className="mt-2 text-[11px] leading-5 text-neutral-500">{callStatus}</p>:null}<p className="mt-3 text-[11px] leading-5 text-neutral-500">Files are hashed client-side before an authenticated private-storage upload is requested; calls require a configured meeting provider.</p></Card>
      <Card className="p-5"><h3 className="font-bold">{locale === "es" ? "Oferta actual" : "Current offer"}</h3><dl className="mt-3 grid grid-cols-[110px_1fr] gap-y-2 text-sm"><dt className="text-neutral-500">Amount</dt><dd className="font-bold">€250,000</dd><dt className="text-neutral-500">Instrument</dt><dd>Equity</dd><dt className="text-neutral-500">Status</dt><dd><StatusBadge tone="warning">Negotiating</StatusBadge></dd></dl><button className="mt-4 h-10 w-full rounded-xl bg-emerald-950 text-sm font-bold text-white">{t.makeOffer}</button></Card>
      <Card className="p-5"><h3 className="font-bold">{locale === "es" ? "Sala segura" : "Room security"}</h3><ul className="mt-3 space-y-2 text-xs leading-5 text-neutral-600"><li>• Participant-only RLS policy</li><li>• Attachment SHA-256 commitments</li><li>• Append-only material audit events</li><li>• No public room discovery</li></ul></Card>
    </div>
  </div>;
}
