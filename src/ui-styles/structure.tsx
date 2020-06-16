import React from "react";

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

export function Heading(props: {
  level: HeadingLevels;
  children: React.ReactNode;
}) {
  const { level } = props;
  const Component = levelToHtmlHeadingElements[level];
  return <Component>{props.children}</Component>;
}
