import React from "react";

export function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      {props.children}
    </div>
  );
}
