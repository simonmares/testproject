import React from "react";
import Link, { LinkProps } from "next/link";
import { useTheme } from "src/pkg-theme/useTheme";
import { HtmlTagComponentProps } from "src/utils-react/types";

type BaseLinkProps = { href: LinkProps["href"]; children: React.ReactNode };
type TextLinkExtraProps = { variant?: "normal" | "quiet" | "primary" };

function BaseLink(props: BaseLinkProps) {
  const { href, ...aTagProps } = props;
  return (
    <Link href={href}>
      <a {...aTagProps}>{props.children}</a>
    </Link>
  );
}

/**
 * Forces type-safety for enums (string unions).
 * - each enum value must have a matching value
 */
function matchEach<TEnum extends string, TReturns>(
  value: TEnum,
  mapping: Record<TEnum, TReturns>
) {
  return mapping[value];
}

function useTextLinkStyle(info: TextLinkExtraProps) {
  const { variant = "normal" } = info;
  const { colors } = useTheme();
  const activeStyle = {
    color: colors.tone_highlight,
    borderBottomColor: colors.tone_highlight,
  };
  return {
    textDecoration: "none",
    borderBottom: `2px solid ${matchEach(variant, {
      quiet: colors.greyscale_300,
      primary: colors.primary_900,
      normal: colors.secondary_300,
    })}`,
    color: "inherit",
    // transition: "color,border 200ms ease-in",
    "&:focus": activeStyle,
    "&:hover": activeStyle,
  };
}

export function TextLink(props: BaseLinkProps & TextLinkExtraProps) {
  const textLinkStyle = useTextLinkStyle(props);
  return <BaseLink css={textLinkStyle} {...props} />;
}

export function FakeTextLink(
  props: HtmlTagComponentProps<"span"> & TextLinkExtraProps
) {
  const textLinkStyle = useTextLinkStyle(props);
  return <span css={textLinkStyle} {...props} />;
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
  props: React.ComponentProps<"a"> & TextLinkExtraProps
) {
  const textLinkStyle = useTextLinkStyle(props);
  return (
    <a {...props} css={textLinkStyle}>
      {props.children}
    </a>
  );
}
