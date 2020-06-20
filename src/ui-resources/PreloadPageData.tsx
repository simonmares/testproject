import React from "react";
import Head from "next/head";

export function PreloadPageData(props: {
  pageData: Record<string, { url: string }>;
}) {
  const { pageData } = props;
  return (
    <Head>
      {Object.keys(pageData).map((resourceName) => {
        const { url } = pageData[resourceName];
        return (
          <link
            key={url}
            rel="preload"
            href={url}
            as="fetch"
            crossOrigin="anonymous"
          />
        );
      })}
    </Head>
  );
}
