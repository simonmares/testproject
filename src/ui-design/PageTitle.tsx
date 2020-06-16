import React from "react";

import { Heading } from "src/ui-styles/structure";

export function PageTitle(props: { children: React.ReactNode }) {
  return (
    <Heading
      css={{
        color: "#EF476F",
        marginTop: "16px",
        background: "#ef476f12",
        display: "inline-block",
        padding: "8px 32px",
        borderRadius: "4px",
        transform: "skew(-0.01turn, 1deg)",
        boxShadow: "1px 1px 1px",
      }}
      level={1}
    >
      {props.children}
    </Heading>
  );
}
