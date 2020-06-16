import React from "react";
import { Heading } from "src/ui-styles/structure";

export function AppHeader() {
  return (
    <header
      css={{
        padding: "8px 32px 8px 32px",
        width: "100%",
        boxSizing: "border-box",
        background: "#c8f0ff",
        color: "#4e4e4e",
        boxShadow: "0px 1px 1px #66c3e6",
      }}
    >
      <Heading
        fontSize={32}
        level={1}
        css={{
          color: "white",
          textShadow: "1px 1px 1px #00a3e0",
          fontWeight: "bold",
        }}
      >
        App
      </Heading>
    </header>
  );
}
