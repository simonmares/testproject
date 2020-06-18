import React from "react";
import { PostPayload } from "src/domain-posts/types";
import { BlockLink } from "src/ui-base/links";
import { Heading } from "src/ui-styles/structure";
import { useTheme } from "src/pkg-theme/useTheme";

export function PostMediumCard(props: { post: PostPayload }) {
  const { post } = props;
  const { colors } = useTheme();
  return (
    <article
      css={{
        padding: "8px 16px",
        boxSizing: "border-box",
        backgroundColor: colors.primary_100,
        borderRadius: "4px",
        border: `2px solid ${colors.primary_500}`,
        height: "100%",
      }}
    >
      <BlockLink label={`Open post ${post.title}`} href={`/post/${post.id}`}>
        <Heading fontSize={22} level={2}>
          {post.title}
        </Heading>
      </BlockLink>
    </article>
  );
}
