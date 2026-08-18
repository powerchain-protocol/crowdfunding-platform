# AI Agents + Skills

## 1. Control plane

```text
AI Agent
  -> Skill
  -> Tool
  -> Policy
  -> Risk
  -> Approval when required
  -> Execution
```

Never:

```text
AI -> unrestricted private key -> send treasury funds
```

## 2. Agents

```text
CampaignAgent
ResearchAgent
RiskAgent
PaymentAgent
TreasuryAgent
ComplianceAgent
ImpactAgent
SupportAgent
ReportingAgent
```

## 3. Permissions

CampaignAgent may improve writing, identify missing fields, summarize evidence and propose milestones. It cannot verify itself or publish without required policy gates.

PaymentAgent may quote routes, explain fees, prepare payment intents and inspect status. It does not sign for the supporter.

TreasuryAgent may detect anomalies, prepare reports and create disbursement proposals. It does not independently satisfy multisig approval.

## 4. Skills

```text
skills/
├── campaign/
├── payments/
├── banking/
├── treasury/
├── cctp/
├── solana/
├── sui/
├── evm/
├── zk/
├── compliance/
├── risk/
└── reporting/
```

Each skill should define:

```text
SKILL.md
input schema
output schema
permissions
allowed tools
forbidden actions
failure handling
examples
```

## 5. Agent audit

```ts
interface AgentRun {
  id: string;
  agent: string;
  model: string;
  promptHash: string;
  inputReferences: string[];
  toolsUsed: string[];
  policyDecisionIds: string[];
  approvalIds: string[];
  outputReference: string;
  createdAt: string;
}
```

The LLM transcript is not the financial audit ledger.
