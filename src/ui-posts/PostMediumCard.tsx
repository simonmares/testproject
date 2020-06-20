import React from "react";
import { PostPayload } from "src/domain-posts/types";
import { BlockLink, FakeTextLink } from "src/ui-base/links";
import { Heading } from "src/ui-styles/structure";
import { useTheme } from "src/pkg-theme/useTheme";
import { LinedText } from "src/ui-design/LinedText";
import { postsLinks } from "src/ui-app-posts";

export function PostMediumCard(props: { post: PostPayload }) {
  const { post } = props;
  const { colors } = useTheme();

  const activeStyle = {
    borderColor: "#a6eaff",
  };
  return (
    <BlockLink
      css={{ height: "inherit" }}
      label={`Open post ${post.title}`}
      link={postsLinks.postDetail(post.id)}
    >
      <article
        css={{
          padding: "8px 16px",
          boxSizing: "border-box",
          backgroundColor: colors.primary_300,
          borderRadius: "4px",
          height: "100%",
          border: `2px solid #e6f9ff`,
          ":focus": activeStyle,
          ":hover": activeStyle,
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <Heading
              fontSize={18}
              fontWeight={600}
              level={2}
              css={{ marginBottom: 8 }}
            >
              {post.title}
            </Heading>
            <LinedText lines={2}>{post.body}</LinedText>
          </div>

          <div
            css={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}
          >
            <FakeTextLink variant="primary">Read post</FakeTextLink>
          </div>
        </div>
      </article>
    </BlockLink>
  );
}
