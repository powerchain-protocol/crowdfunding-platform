import { requestId } from "@powerchain/common";
import type { ApiFailure, ApiSuccess } from "@powerchain/types";

export function success<T>(data: T): ApiSuccess<T> {
  return { data, meta: { requestId: requestId() } };
}

export function failure(code: string, message: string): ApiFailure {
  const id = requestId();
  return { error: { code, message, requestId: id } };
}
