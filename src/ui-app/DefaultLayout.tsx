import React from "react";

import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { mq } from "src/utils-styles/responsive";

export function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <AppHeader />
      <main
        css={mq({
          padding: [
            "16px 8px 64px 8px",
            "16px 16px 64px 16px",
            "16px 32px 64px 32px",
          ],
          boxSizing: "border-box",
          maxWidth: 1200,
          margin: "auto",
        })}
      >
        {props.children}
      </main>
      <AppFooter />
    </div>
  );
}
