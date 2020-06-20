import React, { forwardRef } from "react";

// from https://github.com/feathericons/react-feather
export function createIcon(
  options: { name: string },
  svgChildren: React.ReactElement
) {
  const Icon = forwardRef<
    SVGSVGElement,
    React.ComponentProps<"svg"> & { size?: "string" | number }
  >((props, ref) => {
    const { color = "currentColor", size = "1em", ...rest } = props;
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        {svgChildren}
      </svg>
    );
  });

  Icon.displayName = options.name;

  return Icon;
}
