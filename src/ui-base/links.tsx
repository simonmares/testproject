import React from "react";
import Link, { LinkProps } from "next/link";
import { useTheme } from "src/pkg-theme/useTheme";

type BaseLinkProps = { href: LinkProps["href"]; children: React.ReactNode };
type TextLinkProps = { variant?: "normal" | "quiet" };

function BaseLink(props: BaseLinkProps) {
  const { href, ...aTagProps } = props;
  return (
    <Link href={href}>
      <a {...aTagProps}>{props.children}</a>
    </Link>
  );
}

function useTextLinkStyle(info: TextLinkProps) {
  const { variant = "normal" } = info;
  const { colors } = useTheme();
  const activeStyle = {
    color: colors.tone_highlight,
    borderBottomColor: colors.tone_highlight,
  };
  return {
    textDecoration: "none",
    borderBottom: `2px solid ${
      variant === "normal" ? colors.secondary_300 : colors.greyscale_300
    }`,
    color: "inherit",
    // transition: "color,border 200ms ease-in",
    "&:focus": activeStyle,
    "&:hover": activeStyle,
  };
}

export function TextLink(props: BaseLinkProps & TextLinkProps) {
  const textLinkStyle = useTextLinkStyle(props);
  return <BaseLink css={textLinkStyle} {...props} />;
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

export function ExternalTextLink(
  props: React.ComponentProps<"a"> & TextLinkProps
) {
  const textLinkStyle = useTextLinkStyle(props);
  return (
    <a {...props} css={textLinkStyle}>
      {props.children}
    </a>
  );
}
