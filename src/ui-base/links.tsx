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
  const activeStyle = {
    color: colors.tone_highlight,
    borderBottomColor: colors.tone_highlight,
  };
  return (
    <BaseLink
      css={{
        textDecoration: "none",
        borderBottom: `2px solid ${colors.tone_highlight_300}`,
        color: "inherit",
        // transition: "color,border 200ms ease-in",
        "&:focus": activeStyle,
        "&:hover": activeStyle,
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
