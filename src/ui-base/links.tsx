import React from "react";
import Link, { LinkProps } from "next/link";
import { useTheme } from "src/pkg-theme/useTheme";

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
  const { colors } = useTheme();
  return (
    <BaseLink
      css={{
        textDecoration: "none",
        color: "inherit",
        transition: "color 200ms ease-in",
        "&:hover": { color: colors.secondary_900 },
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
        display: "inline-block",
        textDecoration: "none",
        color: "inherit",
        "&:hover": { color: "inherit", opacity: "75%" },
      }}
      aria-label={label}
      {...passProps}
    />
  );
}
