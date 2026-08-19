"use client";

import * as React from "react";
import type { ApiFailure, ApiSuccess, Invoice } from "@powerchain/types";
import { apiUrl } from "./api-base";

export interface UseInvoicesResult {
  invoices: Invoice[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

function isFailure<T>(value: ApiSuccess<T> | ApiFailure): value is ApiFailure {
  return "error" in value;
}

export function useInvoices(): UseInvoicesResult {
  const [invoices, setInvoices] = React.useState<Invoice[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const refresh = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiUrl("/api/v1/invoices"), {
        credentials: "include",
        headers: { accept: "application/json" },
        cache: "no-store"
      });
      const body = (await response.json()) as ApiSuccess<Invoice[]> | ApiFailure;
      if (!response.ok || isFailure(body)) {
        throw new Error(isFailure(body) ? body.error.message : "Unable to load invoices.");
      }
      setInvoices(body.data);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to load invoices.");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => { void refresh(); }, [refresh]);

  return { invoices, loading, error, refresh };
}

export async function createInvoice(input: Omit<Invoice, "id" | "createdAt" | "updatedAt">): Promise<Invoice> {
  const response = await fetch(apiUrl("/api/v1/invoices"), {
    method: "POST",
    credentials: "include",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify(input)
  });
  const body = (await response.json()) as ApiSuccess<Invoice> | ApiFailure;
  if (!response.ok || isFailure(body)) {
    throw new Error(isFailure(body) ? body.error.message : "Unable to create invoice.");
  }
  return body.data;
}
