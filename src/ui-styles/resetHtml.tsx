import React from "react";
import { HtmlTagComponentProps } from "src/utils-react/types";

const ulOlResetCss = {
  padding: 0,
  margin: 0,
  listStyleType: "none",
  paddingInlineStart: 0,
};

export function UnorderedList(props: HtmlTagComponentProps<"ul">) {
  return <ul css={ulOlResetCss} {...props} />;
}

export function OrderedList(props: HtmlTagComponentProps<"ol">) {
  return <ul css={ulOlResetCss} {...props} />;
}
