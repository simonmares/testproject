import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import { AppErrorBoundary } from "src/ui-app/AppErrorBoundary";
import { AppLayout } from "./AppLayout";

function AppDocument(props: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Head>
        <title>App</title>
        <meta
          name="description"
          content="This is a test project using API https://jsonplaceholder.typicode.com/."
        />
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

            color: #1f1f1f;
          }
        `}
      />

      {props.children}
    </React.Fragment>
  );
}

export function AppRoot(props: { children: React.ReactNode }) {
  return (
    <AppDocument>
      <AppErrorBoundary>
        <AppLayout>{props.children}</AppLayout>
      </AppErrorBoundary>
    </AppDocument>
  );
}
