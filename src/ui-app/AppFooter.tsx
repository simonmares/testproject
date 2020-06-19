import React from "react";
import { WithHtmlProps } from "src/app-types/components";
import { useTheme } from "src/pkg-theme/useTheme";

export function AppFooter(props: WithHtmlProps<{}>) {
  const { colors } = useTheme();
  return (
    <footer
      css={{
        padding: "8px 32px 8px 32px",
        width: "100%",
        boxSizing: "border-box",
        background: colors.primary_700,
        display: "flex",
        justifyContent: "center",
      }}
      {...props}
    >
      <div>App (2020)</div>
    </footer>
  );
}
