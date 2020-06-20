import { useResource } from "./useResource";
import { FetchResourceKey } from "./types";

export function useListResource<TModel, TError = unknown>(
  key: FetchResourceKey
) {
  return useResource<TModel[], TError>(key);
}
