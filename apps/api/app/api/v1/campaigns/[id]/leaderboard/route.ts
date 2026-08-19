import { success } from "@powerchain/api-core";
export const dynamic = "force-dynamic";
export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if ((process.env.POWERCHAIN_DATA_MODE ?? "mock") !== "mock") return Response.json({error:{code:"CONTRIBUTORS_PROGRAM_INDEXER_REQUIRED",message:"Production leaderboard reads require the deployed contributors program and configured indexer/RPC.",requestId:crypto.randomUUID()}},{status:503});
  return Response.json(success([
    {rank:1,contributor:"8mQe…f72K",amountBaseUnits:"1250000000",campaign:id},
    {rank:2,contributor:"5aLt…91Pd",amountBaseUnits:"950000000",campaign:id},
    {rank:3,contributor:"F3kw…2zRa",amountBaseUnits:"700000000",campaign:id},
  ]));
}
