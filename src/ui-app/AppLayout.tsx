import React from "react";

import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { PageLoader } from "src/ui-design/PageLoader";
import { AppErrorBoundary } from "./AppErrorBoundary";

function ClientOnlySuspense(props: { children: React.ReactNode }) {
  const [didMount, setDidMount] = React.useState(false);
  React.useEffect(() => {
    setDidMount(true);
  }, []);
  if (!didMount) {
    // do not render anything on initial
    return null;
  }
  return (
    <React.Suspense fallback={<PageLoader />}>{props.children}</React.Suspense>
  );
}

export function AppLayout(props: { children: React.ReactNode }) {
  return (
    <div
      css={{
        minHeight: "100vh",
        minWidth: 350,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppHeader />
      <main>
        <AppErrorBoundary>
          <ClientOnlySuspense>{props.children}</ClientOnlySuspense>
        </AppErrorBoundary>
      </main>
      <AppFooter css={{ marginTop: "auto" }} />
    </div>
  );
}
