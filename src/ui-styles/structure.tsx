import React from "react";

const headingResetCss = {
  fontSize: "inherit",
  fontWeight: "normal",
  margin: "0",
  marginBlockEnd: "0",
  marginBlockStart: "0",
  marginInlineEnd: "0",
  marginInlineStart: "0",
} as const;

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

// Note: this is type-safe and simple approach
const levelToHtmlHeadingElements: Record<
  HeadingLevels,
  keyof JSX.IntrinsicElements
> = {
  1: "h1" as const,
  2: "h2" as const,
  3: "h3" as const,
  4: "h4" as const,
  5: "h5" as const,
  6: "h6" as const,
};

const levelToFontSize: Record<HeadingLevels, number> = {
  1: 42,
  2: 32,
  3: 22,
  4: 16,
  5: 16,
  6: 16,
};

export function Heading(props: {
  level: HeadingLevels;
  fontSize?: number;
  children: React.ReactNode;
}) {
  const { level, fontSize, ...passProps } = props;
  const Component = levelToHtmlHeadingElements[level];
  const overrideCss = { fontSize: fontSize ?? levelToFontSize[level] };
  return (
    <Component css={{ ...headingResetCss, ...overrideCss }} {...passProps}>
      {props.children}
    </Component>
  );
}
