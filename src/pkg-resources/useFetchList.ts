import React from "react";

import { useFetchResource } from "./useFetchResource";
import { FetchResourceKey } from "./types";

export function useFetchList<TModel, TError>(key: FetchResourceKey) {
  return useFetchResource<TModel[], TError>(key);
}
