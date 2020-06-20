import React, { useEffect } from "react";
import { DefaultLayout } from "./DefaultLayout";

export function DefaultErrorLayout(props: {}) {
  const onRetry = () => {
    window.location.reload();
  };

  return (
    <DefaultLayout>
      <h1>Something went wrong.</h1>
      <button onClick={onRetry}>Retry</button>
    </DefaultLayout>
  );
}
