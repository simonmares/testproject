import React from "react";

import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { mq } from "src/utils-styles/responsive";

export function AppLayout(props: { children: React.ReactNode }) {
  return (
    <div css={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppHeader />
      {props.children}
      <AppFooter css={{ marginTop: "auto" }} />
    </div>
  );
}
