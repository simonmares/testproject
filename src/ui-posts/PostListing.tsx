import React from "react";
import { PostPayload } from "src/domain-posts/types";
import { mq } from "src/utils-styles/responsive";
import { UnorderedList } from "src/ui-styles/resetHtml";

export function PostListing(props: {
  items: PostPayload[];
  PostComponent: React.ComponentType<{ post: PostPayload }>;
}) {
  const { items, PostComponent } = props;
  return (
    <UnorderedList
      css={mq({
        display: "grid",
        gridGap: [8, 16, 32],
        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
      })}
    >
      {items.map((post) => {
        return (
          <React.Fragment key={post.id}>
            <li>
              <PostComponent post={post} />
            </li>
          </React.Fragment>
        );
      })}
    </UnorderedList>
  );
}
