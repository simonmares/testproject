import React from "react";
import { Heading } from "src/ui-styles/structure";
import { useTheme } from "src/pkg-theme/useTheme";
import { BlockLink } from "src/ui-base/links";
import { globalLinks } from ".";

export function AppHeader() {
  const { colors } = useTheme();
  return (
    <header
      css={{
        padding: "8px 32px 8px 32px",
        width: "100%",
        boxSizing: "border-box",
        background: colors.primary_700,
        color: "#4e4e4e",
        boxShadow: "0px 1px 1px #66c3e6",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BlockLink label="Go to App homepage" link={globalLinks.homepage}>
        <Heading
          fontSize={32}
          level={1}
          css={{
            color: "white",
            textShadow: `1px 1px 1px ${colors.primary_900}`,
            fontWeight: "bold",
            textAlign: "center",
            display: "inline-block",
            padding: 8,
          }}
        >
          App
        </Heading>
      </BlockLink>
    </header>
  );
}
