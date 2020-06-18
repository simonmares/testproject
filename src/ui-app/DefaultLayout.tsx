import React from "react";

import { mq } from "src/utils-styles/responsive";
import { AppLayout } from "./AppLayout";

export function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <AppLayout>
      <div
        css={mq({
          padding: [
            "16px 8px 64px 8px",
            "16px 16px 64px 16px",
            "16px 32px 64px 32px",
          ],
          boxSizing: "border-box",
          maxWidth: 1200,
          margin: "0 auto",
        })}
      >
        {props.children}
      </div>
    </AppLayout>
  );
}
