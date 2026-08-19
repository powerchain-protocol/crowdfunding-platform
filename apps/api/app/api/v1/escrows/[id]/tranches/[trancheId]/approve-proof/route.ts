export async function POST(){
  return Response.json({error:{code:"INVESTOR_APPROVAL_PERSISTENCE_REQUIRED",message:"Milestone proof approval requires authenticated investor membership, immutable proof binding, persistence and an append-only audit event.",requestId:crypto.randomUUID()}},{status:501});
}
