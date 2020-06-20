import React from "react";
import { css } from "@emotion/core";
import { HtmlTagComponents } from "src/utils-react/types";

export function LinedText(
  props: React.ComponentProps<"span"> & { lines: number }
) {
  const { lines, ...passProps } = props;
  return (
    <span
      css={css`
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
      `}
      {...passProps}
    />
  );
}
