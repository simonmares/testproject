import React from "react";
import { PostPayload } from "src/domain-posts/types";
import { TextLink, BlockLink } from "src/ui-base/links";
import { mq } from "src/utils-styles/responsive";
import { UnorderedList } from "src/ui-styles/resetHtml";
import { Heading } from "src/ui-styles/structure";

function PostItem(props: { post: PostPayload }) {
  const { post } = props;
  return (
    <article
      css={{
        padding: "8px 16px",
        boxSizing: "border-box",
        backgroundColor: "#e9f9ff",
        borderRadius: "4px",
        border: "2px solid #ddf6ff",
        height: "100%",
      }}
    >
      <BlockLink label={`Open post ${post.title}`} href={`/post/${post.id}`}>
        <Heading level={2}>{post.title}</Heading>
      </BlockLink>
    </article>
  );
}

export function PostListing(props: { items: PostPayload[] }) {
  const { items } = props;
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
              <PostItem post={post} />
            </li>
          </React.Fragment>
        );
      })}
    </UnorderedList>
  );
}
