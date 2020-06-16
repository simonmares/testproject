import React from "react";

export function AppFooter(props: {}) {
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
    >
      <div>App (2020)</div>
    </footer>
  );
}
