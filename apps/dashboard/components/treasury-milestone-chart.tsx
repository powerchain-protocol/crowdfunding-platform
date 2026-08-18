import { Card, StatusBadge } from "@powerchain/ui";

type Milestone = { label: string; target: number; status: "complete" | "next" | "future" };
type CampaignProgress = { title: string; raised: number; goal: number; available: number; milestones: Milestone[] };

const euro = new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function TreasuryMilestoneChart({ campaigns }: { campaigns: CampaignProgress[] }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col gap-3 border-b p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-bold">Treasury funding vs. milestone targets</h3>
          <p className="mt-1 text-xs leading-5 text-slate-500">Reconciled funding is shown against each active campaign&apos;s cumulative milestone thresholds.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-emerald-900" />Reconciled funding</span>
          <span className="flex items-center gap-1.5"><span className="h-3 w-px bg-slate-500" />Milestone</span>
        </div>
      </div>
      <div className="divide-y">
        {campaigns.map((campaign) => {
          const pct = Math.min(100, (campaign.raised / campaign.goal) * 100);
          return (
            <div key={campaign.title} className="p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-semibold">{campaign.title}</div>
                  <div className="mt-1 text-xs text-slate-500">{euro.format(campaign.raised)} reconciled · {euro.format(campaign.available)} available</div>
                </div>
                <StatusBadge tone={pct >= 100 ? "success" : pct >= 50 ? "neutral" : "warning"}>{Math.round(pct)}% of target</StatusBadge>
              </div>
              <div className="relative mt-7 pb-7">
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-emerald-950" style={{ width: `${pct}%` }} />
                </div>
                {campaign.milestones.map((milestone) => {
                  const position = Math.min(100, (milestone.target / campaign.goal) * 100);
                  return (
                    <div key={milestone.label} className="absolute top-[-5px]" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
                      <div className={`mx-auto h-6 w-px ${milestone.status === "complete" ? "bg-emerald-700" : milestone.status === "next" ? "bg-amber-600" : "bg-slate-400"}`} />
                      <div className="mt-1 whitespace-nowrap text-[10px] font-semibold text-slate-500">{milestone.label}</div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-1 flex justify-between text-[11px] text-slate-500"><span>€0</span><span>{euro.format(campaign.goal)} goal</span></div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
