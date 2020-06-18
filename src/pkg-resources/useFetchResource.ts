import useSWR from "swr";
import { FetchResourceKey } from "./types";

function createFetcher() {
  return (url: string) => {
    return fetch(url, { mode: "cors" }).then((r) => r.json());
  };
}

const fetcher = createFetcher();

/**
 * A base hook to fetch resources.
 */
export function useFetchResource<TData, TError>(key: FetchResourceKey) {
  return useSWR<TData, TError>(key, fetcher, { suspense: true });
}
