import useSWR from "swr";
import { FetchResourceKey } from "./types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

/**
 * A base hook to fetch resources.
 */
export function useFetchResource<TData, TError>(key: FetchResourceKey) {
  return useSWR<TData, TError>(key, fetcher, { suspense: true });
}
