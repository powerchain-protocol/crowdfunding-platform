"use client";

import { FormEvent, useState } from "react";
import { Button, Card, Input, StatusBadge } from "@powerchain/ui";

type Mode = "login" | "signup" | "reset";

export function AuthForm({ mode }: { mode: Mode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const api = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3010";
  const title = mode === "login" ? "Sign in to PowerChain" : mode === "signup" ? "Create your account" : "Reset your password";
  const description = mode === "login" ? "Access your campaigns, evidence reviews and treasury workflow." : mode === "signup" ? "Create campaigns and join an organization with role-separated permissions." : "Request a secure password-reset link for your account.";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage(null);
    const form = new FormData(event.currentTarget);
    const endpoint = mode === "login" ? "/api/v1/auth/login" : mode === "signup" ? "/api/v1/auth/register" : "/api/v1/auth/reset-password";
    try {
      const response = await fetch(`${api}${endpoint}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const payload = await response.json().catch(() => null) as { error?: { message?: string }; data?: { message?: string } } | null;
      setMessage(payload?.data?.message ?? payload?.error?.message ?? "Authentication service returned an unexpected response.");
    } catch {
      setMessage("Authentication service is unavailable. Check NEXT_PUBLIC_API_URL and the API app.");
    } finally {
      setBusy(false);
    }
  }

  return <Card className="w-full max-w-md p-6 sm:p-8"><div className="flex items-center justify-between gap-3"><StatusBadge tone="success">Secure access</StatusBadge><a href="/" className="text-xs font-semibold text-slate-500">Back home</a></div><h1 className="mt-5 text-2xl font-bold">{title}</h1><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p><form className="mt-6 grid gap-4" onSubmit={submit}>{mode === "signup" ? <label className="grid gap-2 text-sm font-semibold">Full name<Input name="name" autoComplete="name" required /></label> : null}<label className="grid gap-2 text-sm font-semibold">Email address<Input name="email" type="email" autoComplete="email" required /></label>{mode !== "reset" ? <label className="grid gap-2 text-sm font-semibold">Password<Input name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={12} required /></label> : null}{mode === "login" ? <div className="flex justify-end"><a href="/auth/reset-password" className="text-xs font-semibold text-emerald-900">Forgot password?</a></div> : null}<Button type="submit" disabled={busy}>{busy ? "Please wait…" : mode === "login" ? "Sign in" : mode === "signup" ? "Create account" : "Send reset link"}</Button></form>{message ? <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-600">{message}</div> : null}<div className="mt-6 border-t pt-5 text-center text-xs text-slate-500">{mode === "login" ? <>New to PowerChain? <a href="/auth/sign-up" className="font-bold text-emerald-900">Create an account</a></> : mode === "signup" ? <>Already registered? <a href="/auth/login" className="font-bold text-emerald-900">Sign in</a></> : <>Remembered your password? <a href="/auth/login" className="font-bold text-emerald-900">Return to sign in</a></>}</div></Card>;
}
