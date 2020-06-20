import React from "react";
import { ResponsiveStyleProp, mq } from "src/utils-styles/responsive";
import { useTheme } from "src/pkg-theme/useTheme";
import { AppTheme, SystemSpec } from "src/pkg-theme/types";
import { WithHtmlProps } from "src/app-types/components";
import { HtmlTagComponents } from "src/utils-react/types";

type SpacingSize = SystemSpec["space"];

function useSystemSpacing(size: ResponsiveStyleProp<SpacingSize>) {
  const { system } = useTheme();
  if (Array.isArray(size)) {
    return size.map((val) => system.space(val));
  }
  return system.space(size);
}

export function VSpace(props: { size?: ResponsiveStyleProp<SpacingSize> }) {
  const resolvedSpace = useSystemSpacing(props.size ?? 1);
  return <div css={mq({ height: resolvedSpace })} />;
}

export function HSpace(props: { size?: ResponsiveStyleProp<SpacingSize> }) {
  const resolvedSpace = useSystemSpacing(props.size ?? 1);
  return <span css={mq({ width: resolvedSpace })} />;
}

/**
 * Accepts only system-aware props.
 */
export function SystemInline(
  props: WithHtmlProps<{
    children: React.ReactNode;
    as?: HtmlTagComponents;
    color?: keyof AppTheme["colors"];
    fontSize?: SystemSpec["textFontSizes"];
  }>
) {
  const { as: Component = "span" } = props;
  const theme = useTheme();
  const color = props.color ? theme.colors[props.color] : "";
  const fontSize = props.fontSize ? theme.textFontSizes[props.fontSize] : "";
  return <Component css={{ color, fontSize }} {...props} />;
}
