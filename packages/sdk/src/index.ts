import type { ApiFailure, ApiSuccess, CampaignSummary, PaymentIntent } from "@powerchain/types";

type ApiEnvelope<T> = ApiSuccess<T> | ApiFailure;

export class PowerChainClient {
  constructor(private readonly baseUrl: string) {}

  private async get<T>(path: string): Promise<ApiEnvelope<T>> {
    const response = await fetch(new URL(path, this.baseUrl), { headers: { accept: "application/json" } });
    return (await response.json()) as ApiEnvelope<T>;
  }

  campaigns = {
    list: () => this.get<CampaignSummary[]>("/api/v1/campaigns"),
  };

  payments = {
    get: (id: string) => this.get<PaymentIntent>(`/api/v1/payment-intents/${encodeURIComponent(id)}`),
  };
}
