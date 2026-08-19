export interface ClientStore<T> { get():T; set(next:T):void; subscribe(listener:()=>void):()=>void }
export function createClientStore<T>(initial:T):ClientStore<T>{let value=initial;const listeners=new Set<()=>void>();return{get:()=>value,set:(next)=>{value=next;listeners.forEach(l=>l())},subscribe:(listener)=>{listeners.add(listener);return()=>listeners.delete(listener)}}}
