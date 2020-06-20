import React from "react";

import { Heading } from "src/ui-styles/structure";

export function PageHeading(props: { children: React.ReactNode }) {
  return (
    <Heading level={1}>
      <span
        css={{
          color: "#EF476F",
          marginTop: "16px",
          background: "#ef476f12",
          display: "inline-block",
          padding: "8px 32px",
          borderRadius: "4px",
          transform: "skew(-0.01turn, 1deg)",
          boxShadow: "1px 1px 1px",
          marginBottom: 16,
        }}
      >
        {props.children}
      </span>
    </Heading>
  );
}
