import React from "react";

import { useFetchResource } from "./useFetchResource";

export function useFetchList<TModel, TError>(url: string) {
  return useFetchResource<TModel[], TError>(url);
}
