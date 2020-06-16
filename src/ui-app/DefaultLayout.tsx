import React from "react";

import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

export function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <AppHeader />
      <main css={{ padding: "0 32px 64px 32px", boxSizing: "border-box" }}>
        {props.children}
      </main>
      <AppFooter />
    </div>
  );
}
