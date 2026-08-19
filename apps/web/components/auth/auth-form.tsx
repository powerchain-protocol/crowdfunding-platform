"use client";

import { FormEvent, useState } from "react";
import { Button, Icon, Input, StatusBadge, useLocale } from "@powerchain/ui";

type Mode = "login" | "signup" | "reset";

export function AuthForm({ mode }: { mode: Mode }) {
  const { locale } = useLocale();
  const es = locale === "es";
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const api = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3010";
  const title = mode === "login" ? (es ? "Bienvenido de nuevo" : "Welcome back") : mode === "signup" ? (es ? "Crea tu cuenta" : "Create your account") : (es ? "Restablece tu contraseña" : "Reset your password");
  const description = mode === "login" ? (es ? "Inicia sesión para gestionar campañas, acuerdos, salas de negociación y flujos de tesorería." : "Sign in to manage campaigns, agreements, deal rooms and treasury workflows.") : mode === "signup" ? (es ? "Crea una cuenta de fundador o inversor con permisos separados por rol." : "Create a founder or investor account with role-separated permissions.") : (es ? "Introduce tu correo para solicitar un enlace seguro de restablecimiento." : "Enter your email address to request a secure reset link.");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage(null);
    const form = new FormData(event.currentTarget);
    const endpoint = mode === "login" ? "/api/v1/auth/login" : mode === "signup" ? "/api/v1/auth/register" : "/api/v1/auth/reset-password";
    try {
      const response = await fetch(`${api}${endpoint}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(form.entries())) });
      const payload = await response.json().catch(() => null) as { error?: { message?: string }; data?: { message?: string } } | null;
      setMessage(payload?.data?.message ?? payload?.error?.message ?? (es ? "El servicio de autenticación devolvió una respuesta inesperada." : "Authentication service returned an unexpected response."));
    } catch { setMessage(es ? "El servicio de autenticación no está disponible. Comprueba NEXT_PUBLIC_API_URL y la aplicación API." : "Authentication service is unavailable. Check NEXT_PUBLIC_API_URL and the API app."); }
    finally { setBusy(false); }
  }

  return <div className="w-full max-w-md"><div className="flex items-center justify-between gap-3"><StatusBadge tone="success">{es ? "Acceso seguro" : "Secure access"}</StatusBadge><a href="/" className="text-xs font-semibold text-neutral-500 hover:text-neutral-950">{es ? "Volver al inicio" : "Back home"}</a></div><h1 className="mt-6 text-3xl font-bold tracking-[-.04em] text-neutral-950">{title}</h1><p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p><form className="mt-7 grid gap-4" onSubmit={submit}>{mode === "signup" ? <label className="grid gap-2 text-sm font-semibold text-neutral-800">{es ? "Nombre completo" : "Full name"}<Input name="name" autoComplete="name" placeholder={es ? "Tu nombre" : "Your name"} required/></label> : null}<label className="grid gap-2 text-sm font-semibold text-neutral-800">{es ? "Correo electrónico" : "Email address"}<Input name="email" type="email" autoComplete="email" placeholder="name@organization.org" required/></label>{mode !== "reset" ? <label className="grid gap-2 text-sm font-semibold text-neutral-800">{es ? "Contraseña" : "Password"}<Input name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={12} placeholder="••••••••••••" required/></label> : null}{mode === "login" ? <div className="flex items-center justify-between"><label className="flex items-center gap-2 text-xs text-neutral-500"><input type="checkbox" className="h-4 w-4 accent-emerald-950"/>{es ? "Recordarme" : "Remember me"}</label><a href="/auth/reset-password" className="text-xs font-bold text-emerald-950">{es ? "¿Olvidaste la contraseña?" : "Forgot password?"}</a></div> : null}<Button className="mt-1 w-full" type="submit" disabled={busy}>{busy ? (es ? "Espera…" : "Please wait…") : mode === "login" ? <>{es ? "Iniciar sesión" : "Sign in"} <Icon name="arrow-right"/></> : mode === "signup" ? <>{es ? "Crear cuenta" : "Create account"} <Icon name="arrow-right"/></> : <>{es ? "Enviar enlace" : "Send reset link"} <Icon name="arrow-right"/></>}</Button></form>{message ? <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-xs leading-5 text-neutral-600">{message}</div> : null}<div className="mt-7 border-t border-neutral-200 pt-5 text-center text-xs text-neutral-500">{mode === "login" ? <>{es ? "¿Nuevo en PowerChain? " : "New to PowerChain? "}<a href="/auth/sign-up" className="font-bold text-emerald-950">{es ? "Crear una cuenta" : "Create an account"}</a></> : mode === "signup" ? <>{es ? "¿Ya estás registrado? " : "Already registered? "}<a href="/auth/login" className="font-bold text-emerald-950">{es ? "Iniciar sesión" : "Sign in"}</a></> : <>{es ? "¿Recordaste tu contraseña? " : "Remembered your password? "}<a href="/auth/login" className="font-bold text-emerald-950">{es ? "Volver a iniciar sesión" : "Return to sign in"}</a></>}</div><p className="mt-5 text-center text-[10px] leading-4 text-neutral-400">{es ? "Al continuar aceptas los términos de la plataforma y reconoces que la autorización de tesorería sigue sujeta a las políticas configuradas de la organización." : "By continuing you agree to the platform terms and acknowledge that treasury authorization remains subject to configured organization policies."}</p></div>;
}
