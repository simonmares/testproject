import { useFetchResource } from "./useFetchResource";
import { useState } from "react";
import { FetchResourceKey, LazyResource } from "./types";

export function useLazyResource<TModel, TError = unknown>(
  key: FetchResourceKey
): LazyResource<TModel, TError> {
  const [lazyFetchActive, setLazyFetchActive] = useState(false);

  const resource = useFetchResource<TModel, TError>(
    lazyFetchActive ? key : null,
    {
      suspense: false,
    }
  );

  return {
    lazyLoad: () => {
      setLazyFetchActive(true);
    },
    lazyState: (() => {
      if (!lazyFetchActive) {
        return "initial";
      }
      if (resource.isValidating) {
        return "loading";
      }
      return "loaded";
    })(),
    resource,
  };
}
