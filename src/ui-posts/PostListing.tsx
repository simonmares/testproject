import React from "react";
import { PostPayload } from "src/domain-posts/types";
import { TextLink } from "src/ui-base/links";
import { mq } from "src/utils-styles/responsive";
import { UnorderedList } from "src/ui-styles/resetHtml";

function PostItem(props: { post: PostPayload }) {
  const { post } = props;
  return (
    <article>
      <TextLink href={`/post/${post.id}`}>{post.title}</TextLink>
    </article>
  );
}

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
      {items.map((post) => {
        return (
          <React.Fragment key={post.id}>
            <li>
              <PostItem post={post} />
            </li>
          </React.Fragment>
        );
      })}
    </UnorderedList>
  );
}
