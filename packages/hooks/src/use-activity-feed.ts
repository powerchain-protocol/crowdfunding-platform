"use client";
import {useEffect,useState} from "react";
import {subscribeActivity,type ActivityEvent,type RealtimeTransport} from "@powerchain/realtime";
import {apiUrl} from "./api-base";
export function useActivityFeed(campaignId:string,pollMs=10_000){
  const [events,setEvents]=useState<ActivityEvent[]>([]);
  const [transport,setTransport]=useState<RealtimeTransport>("POLLING");
  useEffect(()=>subscribeActivity({campaignId,...(process.env.NEXT_PUBLIC_ACTIVITY_WS_URL ? { websocketUrl: process.env.NEXT_PUBLIC_ACTIVITY_WS_URL } : {}),sseUrl:apiUrl(`/api/v1/activity/stream?campaignId=${encodeURIComponent(campaignId)}`),pollUrl:apiUrl(`/api/v1/activity?campaignId=${encodeURIComponent(campaignId)}`),pollMs,onEvents:setEvents,onTransport:setTransport}),[campaignId,pollMs]);
  return{events,transport};
}
