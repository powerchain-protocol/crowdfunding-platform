export interface ProofStorage { put(input:{campaignId:string;milestoneId:string;bytes:Uint8Array;contentType:string;sha256:string}):Promise<{uri:string;sha256:string}>; get(uri:string):Promise<Uint8Array>; }
export function assertProofUri(uri:string):void { if(!/^(ipfs:\/\/|https:\/\/)/.test(uri)) throw new Error("Proof URI must use ipfs:// or https://"); }
