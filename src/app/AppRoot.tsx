import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import { AppErrorBoundary } from "src/ui-app/AppErrorBoundary";
import { PageLoader } from "src/ui-design/PageLoader";

function AppDocument(props: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
        `}
      />

      {props.children}
    </React.Fragment>
  );
}

function ClientOnly(props: { children: React.ReactNode }) {
  const [didMount, setDidMount] = React.useState(false);
  React.useEffect(() => {
    setDidMount(true);
  }, []);

  if (!didMount) {
    // do not render anything on initial
    return null;
  }
  return (
    <React.Suspense fallback={<PageLoader />}>
      {props.children}
    </React.Suspense>
  );
}

export function AppRoot(props: { children: React.ReactNode }) {
  return (
    <AppDocument>
      <AppErrorBoundary>
        <ClientOnly>{props.children}</ClientOnly>
      </AppErrorBoundary>
    </AppDocument>
  );
}
