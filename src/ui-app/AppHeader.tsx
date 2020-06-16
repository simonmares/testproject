import React from "react";
import { Heading } from "src/ui-styles/structure";

export function AppHeader(props: {}) {
  return (
    <header
      css={{
        padding: "8px 32px 8px 32px",
        width: "100%",
        boxSizing: "border-box",
        background: "#c8f0ff",
        color: "#4e4e4e",
        boxShadow: "0px 1px 1px #d4d4d4",
      }}
    >
      <Heading level={1}>App</Heading>
    </header>
  );
}
