import React from "react";

type DivProps = React.ComponentProps<"div">;

/**
 * A type helper for components that spreads unused "html props" on its root element.
 *
 * This type lets the component to accept "html props" without explicitly specifying them.
 * The component can still accept props with same name (such as title as react element) by
 * specifying them in the generic type.
 */
export type WithHtmlProps<T extends {}> = Omit<
  {
    className?: DivProps["className"];
    title?: DivProps["title"];
  },
  keyof T
> &
  T;
