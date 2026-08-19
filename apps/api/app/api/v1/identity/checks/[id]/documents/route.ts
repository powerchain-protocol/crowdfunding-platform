import { failure } from "@powerchain/api-core";
export async function POST(){return Response.json(failure("IDENTITY_STORAGE_NOT_CONFIGURED","Sensitive identity uploads require authenticated encrypted object storage, malware scanning, retention policy and a configured verification provider."),{status:501})}
