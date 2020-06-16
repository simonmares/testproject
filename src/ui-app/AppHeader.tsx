import React from "react";
import { Heading } from "src/ui-styles/structure";
import { useTheme } from "src/pkg-theme/useTheme";

export function AppHeader() {
  const { colors } = useTheme();
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
          textShadow: `1px 1px 1px ${colors.primary_900}`,
          fontWeight: "bold",
        }}
      >
        App
      </Heading>
    </header>
  );
}
