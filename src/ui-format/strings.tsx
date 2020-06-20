import React from "react";

import { ExternalTextLink } from "src/ui-base/links";
import { LinkIcon } from "src/ui-icons/LinkIcon";

export function FormatEmail(props: { value: string }) {
  return (
    <ExternalTextLink variant="quiet" href={`mailto:${props.value}`}>
      {props.value}
    </ExternalTextLink>
  );
}

export function FormatPhone(props: { value: string }) {
  return (
    <ExternalTextLink variant="quiet" href={`tel:${props.value}`}>
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
      variant="quiet"
      href={href}
      css={{ display: "inline-flex", alignItems: "center" }}
    >
      {props.value} &nbsp;
      <LinkIcon />
    </ExternalTextLink>
  );
}
