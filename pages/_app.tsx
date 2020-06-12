import React from "react";
import { AppProps } from "next/app";
import { AppRoot } from "../src/app/AppRoot";

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppRoot>
      <Component {...pageProps} />
    </AppRoot>
  );
}

export default MyApp;
