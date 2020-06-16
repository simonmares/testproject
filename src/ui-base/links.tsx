import React from "react";
import Link, { LinkProps } from "next/link";

type BaseLinkProps = LinkProps & { children: React.ReactNode };

function BaseLink(props: BaseLinkProps) {
  return (
    <Link {...props}>
      <a>{props.children}</a>
    </Link>
  );
}

export function TextLink(props: BaseLinkProps) {
  return <BaseLink {...props} />;
}
