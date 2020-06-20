export type HtmlTagComponents = keyof JSX.IntrinsicElements;

export type HtmlTagComponentProps<
  T extends HtmlTagComponents
> = React.ComponentProps<T>;
