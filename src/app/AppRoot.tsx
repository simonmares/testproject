import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";

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

export function AppRoot(props: { children: React.ReactNode }) {
  return <AppDocument>{props.children}</AppDocument>;
}
