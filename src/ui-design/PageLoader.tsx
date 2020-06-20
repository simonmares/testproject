import React from "react";

import { DotLoader } from "./DotLoader";

export function PageLoader(props: { message?: string }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <DotLoader message={props.message} css={{ fontSize: 48 }} />
    </div>
  );
}
