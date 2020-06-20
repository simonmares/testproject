import React from "react";
import { DotLoader } from "./DotLoader";

export function InlineLoader(props: { message?: string }) {
  return <DotLoader message={props.message} />;
}
