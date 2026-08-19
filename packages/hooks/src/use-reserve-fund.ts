"use client";
import {useEffect,useState} from "react";
import {apiUrl} from "./api-base";
export function useReserveFund(campaignId:string,pollMs=10_000){const [data,setData]=useState<unknown>(null);const [error,setError]=useState<string|null>(null);useEffect(()=>{let active=true;const load=async()=>{try{const r=await fetch(apiUrl(`/api/v1/funding/campaigns/${encodeURIComponent(campaignId)}/reserve`),{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);const b=await r.json();if(active){setData(b.data);setError(null)}}catch(e){if(active)setError(e instanceof Error?e.message:"Reserve fund unavailable")}};void load();const id=setInterval(()=>void load(),Math.min(15000,Math.max(5000,pollMs)));return()=>{active=false;clearInterval(id)}},[campaignId,pollMs]);return{data,error}}
