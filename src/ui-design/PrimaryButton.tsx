import React from "react";

type PrimaryButtonProps = {
  size?: "small" | "normal" | "large";
};

export function PrimaryButton(
  props: PrimaryButtonProps & React.ComponentProps<"button">
) {
  // @todo size is not used
  const { size = "normal", ...passProps } = props;
  return <button {...passProps} />;
}
