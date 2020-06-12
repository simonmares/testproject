import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

/**
 * A base hook to fetch resources.
 */
export function useFetchResource<TData, TError>(url: string) {
  return useSWR<TData, TError>(url, fetcher, { suspense: true });
}
