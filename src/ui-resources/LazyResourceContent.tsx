import React from "react";

import { LazyResource } from "src/pkg-resources/types";

export function LazyResourceContent<T>(props: {
  children: React.ReactElement;
  resource: LazyResource<T>;
}) {
  return props.resource.lazyState === "loaded" ? (
    props.children
  ) : (
    <div>....</div>
  );
}
