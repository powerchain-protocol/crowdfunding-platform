export const dynamic="force-dynamic";
export const runtime="nodejs";
export async function GET(request:Request){
  const campaignId=new URL(request.url).searchParams.get("campaignId")??"cmp_flood_2026";
  const encoder=new TextEncoder(); let timer:ReturnType<typeof setInterval>|undefined; let heartbeat:ReturnType<typeof setInterval>|undefined;
  const stream=new ReadableStream<Uint8Array>({
    start(controller){
      const send=()=>controller.enqueue(encoder.encode(`data: ${JSON.stringify([{id:`evt_${Date.now()}`,campaignId,kind:"CONTRIBUTION",signature:"indexed-demo",wallet:"public-wallet",occurredAt:new Date().toISOString()}])}\n\n`));
      send(); timer=setInterval(send,10_000); heartbeat=setInterval(()=>controller.enqueue(encoder.encode(`: heartbeat ${Date.now()}\n\n`)),15_000);
      request.signal.addEventListener("abort",()=>{if(timer)clearInterval(timer);if(heartbeat)clearInterval(heartbeat);try{controller.close()}catch{}},{once:true});
    },
    cancel(){if(timer)clearInterval(timer);if(heartbeat)clearInterval(heartbeat)}
  });
  return new Response(stream,{headers:{"content-type":"text/event-stream","cache-control":"no-cache, no-transform","connection":"keep-alive","x-accel-buffering":"no"}})
}
