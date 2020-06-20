import useSWR, { ConfigInterface } from "swr";
import { FetchResourceKey } from "./types";

function createFetcher() {
  return (url: string) => {
    return fetch(url, { mode: "cors" }).then((r) => r.json());
  };
}

const fetcher = createFetcher();

type UseFetchResourceOptions = {
  suspense: ConfigInterface["suspense"];
};

/**
 * A base hook to fetch resources.
 */
export function useFetchResource<TData, TError = unknown>(
  key: FetchResourceKey,
  options?: UseFetchResourceOptions
) {
  return useSWR<TData, TError>(key, fetcher, { suspense: true, ...options });
}
