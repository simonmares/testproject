import React from "react";
import { AppTheme } from "src/pkg-theme/types";

export function PageInlineNotification(props: {
  children: React.ReactNode;
  tone: "warning"; // add more if needed
}) {
  const [isOpen, setIsOpen] = React.useState(true);
  if (!isOpen) {
    return null;
  }
  return (
    <div
      css={{
        backgroundColor: "#ff93002b",
        border: "1px solid #ffcc86",
        borderRadius: "4px",
        padding: 8,
      }}
    >
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        {props.children}
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

PageInlineNotification.Layout = PageInlineNotificationLayout;

function PageInlineNotificationLayout(props: { children: React.ReactNode }) {
  return <div css={{ marginBottom: 16 }}>{props.children}</div>;
}
