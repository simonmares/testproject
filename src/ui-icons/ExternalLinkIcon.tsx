import React, { forwardRef, RefObject } from "react";

// from https://github.com/feathericons/react-feather/blob/master/src/icons/external-link.js

export const ExternalLinkIcon = forwardRef<
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
});
