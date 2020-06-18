import React from "react";
import { ResponsiveStyleProp, mq } from "src/utils-styles/responsive";
import { useTheme } from "src/pkg-theme/useTheme";
import { AppTheme } from "src/pkg-theme/types";

//
// system >>>
//
// can go to own file once its bigger
//

type SpacingSize = 0 | 1 | 2 | 3 | 4;

const spacingToValues = { 0: 0, 1: 8, 2: 16, 3: 32, 4: 64 };

function useSystemSpacing(size: ResponsiveStyleProp<SpacingSize>) {
  if (Array.isArray(size)) {
    return size.map((val) => spacingToValues[val]);
  }
  return spacingToValues[size];
}

//
// >>> system
//

export function VSpace(props: { size?: ResponsiveStyleProp<SpacingSize> }) {
  const resolvedSpace = useSystemSpacing(props.size ?? 1);
  return <div css={mq({ height: resolvedSpace })} />;
}

export function HSpace(props: { size?: ResponsiveStyleProp<SpacingSize> }) {
  const resolvedSpace = useSystemSpacing(props.size ?? 1);
  return <span css={mq({ width: resolvedSpace })} />;
}

export function SystemText(props: {
  children: React.ReactNode;
  color: keyof AppTheme["colors"];
}) {
  const { colors } = useTheme();
  const color = props.color ? colors[props.color] : "";
  return <span css={{ color }}>{props.children}</span>;
}
