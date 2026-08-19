export interface PromptSuggestion { id: string; title: string; prompt: string; category: "campaign" | "tokenomics" | "treasury" | "analysis" }
export const promptSuggestions: readonly PromptSuggestion[] = [
  { id: "campaign-summary", title: "Improve campaign summary", prompt: "Improve this campaign summary while preserving all factual claims.", category: "campaign" },
  { id: "milestone-proof", title: "Review milestone evidence", prompt: "Summarize the evidence package and list missing proof without approving a release.", category: "treasury" },
  { id: "token-overview", title: "Token overview", prompt: "Prepare a neutral Token-2022 overview. Do not sign or submit transactions.", category: "tokenomics" },
];
