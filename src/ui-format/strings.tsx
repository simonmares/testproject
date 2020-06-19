import React from "react";

import { ExternalTextLink } from "src/ui-base/links";
import { ExternalLinkIcon } from "src/ui-icons/ExternalLinkIcon";

export function FormatEmail(props: { value: string }) {
  return (
    <ExternalTextLink href={`mailto:${props.value}`}>
      {props.value}
    </ExternalTextLink>
  );
}

export function FormatPhone(props: { value: string }) {
  return (
    <ExternalTextLink href={`tel:${props.value}`}>
      {props.value}
    </ExternalTextLink>
  );
}

export function FormatWebsite(props: { value: string }) {
  const { value } = props;
  // Note: https would be better, but we cannot rely site has it + HSTS should force to use https
  const href = value.includes("http") ? value : `http://${value}`;
  return (
    <ExternalTextLink
      href={href}
      css={{ display: "inline-flex", alignItems: "center" }}
    >
      {props.value} &nbsp;
      <ExternalLinkIcon />
    </ExternalTextLink>
  );
}
