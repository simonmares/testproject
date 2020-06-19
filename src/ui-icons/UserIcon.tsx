import React, { forwardRef, RefObject } from "react";

// from https://github.com/feathericons/react-feather

export const UserIcon = forwardRef<
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
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
});
