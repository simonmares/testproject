import React from "react";
import { PostPayload } from "src/domain-posts/types";
import { TextLink } from "src/ui-base/links";
import { mq } from "src/utils-styles/responsive";
import { UnorderedList } from "src/ui-styles/resetHtml";

export function PostListing(props: { items: PostPayload[] }) {
  const { items } = props;
  return (
    <UnorderedList
      css={mq({
        display: "grid",
        gridGap: "8px",
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
      })}
    >
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li>
              <TextLink href={`/post/${item.id}`}>{item.title}</TextLink>
            </li>
          </React.Fragment>
        );
      })}
    </UnorderedList>
  );
}
