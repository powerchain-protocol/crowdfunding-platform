"use client";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { Card } from "../card";
type Prompt = { id: string; title: string; prompt: string; category?: string | null };
export function SavedPrompts({ onUse }: { onUse?: (prompt: string) => void }) { const [items, setItems] = useState<Prompt[]>([]); const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3010"; useEffect(() => { void fetch(`${api}/api/v1/prompts`, { credentials: "include" }).then((r) => r.ok ? r.json() : null).then((body) => setItems(body?.data ?? [])).catch(() => undefined); }, [api]); return <div className="grid gap-3">{items.length ? items.map((item) => <Card key={item.id} className="p-4"><div className="flex items-start justify-between gap-3"><div><div className="text-sm font-bold">{item.title}</div><p className="mt-1 line-clamp-2 text-xs leading-5 text-neutral-500">{item.prompt}</p></div>{onUse ? <Button size="sm" variant="outline" onClick={() => onUse(item.prompt)}>Use</Button> : null}</div></Card>) : <div className="rounded-xl border border-dashed border-neutral-200 p-5 text-sm text-neutral-500">No saved prompts yet.</div>}</div>; }
