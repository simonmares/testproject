import { useFetchResource } from "./useFetchResource";
import { FetchResourceKey } from "./types";

export function useFetchList<TModel, TError = unknown>(key: FetchResourceKey) {
  return useFetchResource<TModel[], TError>(key);
}
