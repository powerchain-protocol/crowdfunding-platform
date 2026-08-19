export type FundingCheckoutResult = {kind:"REDIRECT";provider:"MIDTRANS";url:string;orderId:string}|{kind:"CONTACT_SUPPORT";provider:"DEMO";message:string;orderId:string};
export interface FundingPaymentClient { createCheckout(input:{orderId:string;grossAmount:number;campaignId:string;email?:string}):Promise<FundingCheckoutResult>; }
export class DemoFundingClient implements FundingPaymentClient { async createCheckout(input:{orderId:string;grossAmount:number;campaignId:string}):Promise<FundingCheckoutResult>{return{kind:"CONTACT_SUPPORT",provider:"DEMO",orderId:input.orderId,message:"Payments are in demo mode. Contact support to complete this contribution."}} }
export class MidtransFundingClient implements FundingPaymentClient {
  constructor(private readonly options:{serverKey:string;snapUrl:string;finishUrl:string}){}
  async createCheckout(input:{orderId:string;grossAmount:number;campaignId:string;email?:string}):Promise<FundingCheckoutResult>{
    if(!this.options.serverKey) throw new Error("MIDTRANS_SERVER_KEY is not configured");
    const auth=Buffer.from(`${this.options.serverKey}:`).toString("base64");
    const response=await fetch(this.options.snapUrl,{method:"POST",headers:{authorization:`Basic ${auth}`,"content-type":"application/json",accept:"application/json"},body:JSON.stringify({transaction_details:{order_id:input.orderId,gross_amount:input.grossAmount},customer_details:input.email?{email:input.email}:undefined,callbacks:{finish:this.options.finishUrl},custom_field1:input.campaignId})});
    if(!response.ok) throw new Error(`Midtrans checkout failed with HTTP ${response.status}`);
    const body=await response.json() as {redirect_url?:string};
    if(!body.redirect_url) throw new Error("Midtrans response did not include redirect_url");
    return{kind:"REDIRECT",provider:"MIDTRANS",url:body.redirect_url,orderId:input.orderId};
  }
}
export function createFundingClient(env:Record<string,string|undefined>=process.env):FundingPaymentClient{
  if((env.PAYMENTS_MODE??"demo")==="demo") return new DemoFundingClient();
  return new MidtransFundingClient({serverKey:env.MIDTRANS_SERVER_KEY??"",snapUrl:env.MIDTRANS_SNAP_URL??"",finishUrl:env.MIDTRANS_FINISH_URL??""});
}
