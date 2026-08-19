import {clampPollInterval,type ActivityEvent} from "./index";

export interface ActivitySubscriptionOptions {
  campaignId: string;
  websocketUrl?: string;
  sseUrl?: string;
  pollUrl: string;
  pollMs?: number;
  onEvents(events: ActivityEvent[]): void;
  onTransport?(transport: "WEBSOCKET"|"SSE"|"POLLING"): void;
  onError?(error: Error): void;
}

export function subscribeActivity(options:ActivitySubscriptionOptions):()=>void {
  let active=true;
  let socket:WebSocket|undefined;
  let source:EventSource|undefined;
  let interval:ReturnType<typeof setInterval>|undefined;
  let fallbackStarted=false;
  const parse=(value:string):ActivityEvent[]=>{const parsed=JSON.parse(value) as ActivityEvent|ActivityEvent[]|{data:ActivityEvent[]};return Array.isArray(parsed)?parsed:"data" in parsed?parsed.data:[parsed]};
  const poll=()=>{
    if(!active||interval)return;
    options.onTransport?.("POLLING");
    const load=async()=>{try{const response=await fetch(options.pollUrl,{cache:"no-store"});if(!response.ok)throw new Error(`Activity poll failed with HTTP ${response.status}`);const body=await response.json() as {data:ActivityEvent[]};if(active)options.onEvents(body.data)}catch(error){options.onError?.(error instanceof Error?error:new Error("Activity poll failed"))}};
    void load(); interval=setInterval(()=>void load(),clampPollInterval(options.pollMs??10_000));
  };
  const sse=()=>{
    if(!active||source||fallbackStarted)return;
    if(!options.sseUrl||typeof EventSource==="undefined"){fallbackStarted=true;poll();return;}
    options.onTransport?.("SSE");
    source=new EventSource(options.sseUrl);
    source.onmessage=(event)=>{try{options.onEvents(parse(event.data))}catch(error){options.onError?.(error instanceof Error?error:new Error("Invalid SSE event"))}};
    source.onerror=()=>{source?.close();source=undefined;fallbackStarted=true;poll()};
  };
  if(options.websocketUrl&&typeof WebSocket!=="undefined"){
    options.onTransport?.("WEBSOCKET");
    const url=new URL(options.websocketUrl,window.location.href);url.searchParams.set("campaignId",options.campaignId);socket=new WebSocket(url);
    let opened=false;
    socket.onopen=()=>{opened=true};
    socket.onmessage=(event)=>{try{options.onEvents(parse(String(event.data)))}catch(error){options.onError?.(error instanceof Error?error:new Error("Invalid WebSocket event"))}};
    socket.onerror=()=>{if(!opened){socket?.close();socket=undefined;sse()}};
    socket.onclose=()=>{socket=undefined;if(active)sse()};
  } else sse();
  return()=>{active=false;socket?.close();source?.close();if(interval)clearInterval(interval)};
}
