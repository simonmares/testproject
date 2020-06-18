import React from "react";
import { WithHtmlProps } from "src/app-types/components";

export function AppFooter(props: WithHtmlProps<{}>) {
  return (
    <footer
      css={{
        padding: "8px 32px 8px 32px",
        width: "100%",
        boxSizing: "border-box",
        background: "#c8f0ff",
        display: "flex",
        justifyContent: "center",
      }}
      {...props}
    >
      <div>App (2020)</div>
    </footer>
  );
}
