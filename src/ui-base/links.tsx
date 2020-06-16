import React from "react";
import Link, { LinkProps } from "next/link";

type BaseLinkProps = { href: LinkProps["href"]; children: React.ReactNode };

function BaseLink(props: BaseLinkProps) {
  const { href, ...aTagProps } = props;
  return (
    <Link href={href}>
      <a {...aTagProps}>{props.children}</a>
    </Link>
  );
}

export function TextLink(props: BaseLinkProps) {
  return (
    <BaseLink
      css={{
        textDecoration: "none",
        color: "inherit",
        display: "inline-block",
        "&:hover": { color: "hotpink", opacity: "75%" },
      }}
      {...props}
    />
  );
}

export function BlockLink(props: BaseLinkProps & { label: string }) {
  const { label, ...passProps } = props;
  return (
    <BaseLink
      css={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        "&:hover": { color: "inherit", opacity: "75%" },
      }}
      aria-label={label}
      {...passProps}
    />
  );
}
