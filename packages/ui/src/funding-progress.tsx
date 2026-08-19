export function FundingProgress({funded,goal,currency="€"}:{funded:number;goal:number;currency?:string}){
  const pct=goal>0?Math.min(100,Math.round(funded/goal*100)):0;
  return <div><div className="flex items-baseline justify-between gap-3"><span className="font-bold">{currency}{funded.toLocaleString()}</span><span className="text-xs text-neutral-500">{pct}% of {currency}{goal.toLocaleString()}</span></div><div className="mt-2 h-2.5 overflow-hidden rounded-full bg-neutral-100"><div className="h-full rounded-full bg-emerald-950 transition-all duration-500" style={{width:`${pct}%`}}/></div></div>
}
