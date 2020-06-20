import React from "react";
import { TextLink } from "src/ui-base/links";
import { DefaultLayout } from "./DefaultLayout";

export function NotFoundLayout(props: {}) {
  return (
    <DefaultLayout>
      <h1>Page not found</h1>
      <TextLink href="/">Go to homepage</TextLink>
    </DefaultLayout>
  );
}
