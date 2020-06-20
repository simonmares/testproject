import React from "react";

import { LazyResource } from "src/pkg-resources/types";
import { InlineLoader } from "src/ui-design/InlineLoader";

/**
 * Props:
 *
 * -- loadMode: how the resource is loaded (manual=outside of this component)
 */
export function LazyResourceContent<T>(props: {
  children: (
    data: LazyResource<T>["resource"]["data"],
    resource: LazyResource<T>
  ) => React.ReactElement;
  message?: string;
  loadMode: "manual";
  resource: LazyResource<T>;
}) {
  const lazyResource = props.resource;
  const { resource } = lazyResource;
  return lazyResource.lazyState === "loaded" ? (
    props.children(resource.data, lazyResource)
  ) : (
    <InlineLoader message={props.message} />
  );
}
