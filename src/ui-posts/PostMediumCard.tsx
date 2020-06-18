import React from "react";
import { PostPayload } from "src/domain-posts/types";
import { BlockLink } from "src/ui-base/links";
import { Heading } from "src/ui-styles/structure";

export function PostMediumCard(props: { post: PostPayload }) {
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
