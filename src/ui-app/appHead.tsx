import React from "react";
import Head from "next/head";

export function PageHeadTitle(props: { title: string }) {
  return (
    <Head>
      <title>{props.title} | App</title>
    </Head>
  );
}
