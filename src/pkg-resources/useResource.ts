import useSWR, { ConfigInterface } from "swr";
import { FetchResourceKey } from "./types";

function createFetcher() {
  return (url: string) => {
    return fetch(url, { mode: "cors" }).then((r) => r.json());
  };
}

const fetcher = createFetcher();

type useResourceOptions = {
  suspense: ConfigInterface["suspense"];
};

/**
 * A base hook to fetch resources.
 */
export function useResource<TData, TError = unknown>(
  key: FetchResourceKey,
  options?: useResourceOptions
) {
  return useSWR<TData, TError>(key, fetcher, { suspense: true, ...options });
}
