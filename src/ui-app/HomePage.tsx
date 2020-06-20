import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { PageHeading } from "src/ui-design/PageHeading";
import { TextLink } from "src/ui-base/links";
import { useListResource } from "src/pkg-resources/useListResource";
import { PostPayload } from "src/domain-posts/types";
import { PostListing } from "src/ui-posts/PostListing";
import { VSpace } from "src/ui-styles/system";
import { PostMediumCard } from "src/ui-posts/PostMediumCard";
import { postsLinks } from "src/ui-app-posts";

export function HomePage(props: {}) {
  const postsResource = useListResource<PostPayload, unknown>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = (postsResource.data || []).slice(0, 10);
  return (
    <DefaultLayout>
      <PageHeading>Latest 10 posts</PageHeading>

      <VSpace size={[1, 2, 3]} />

      <PostListing items={posts} PostComponent={PostMediumCard} />

      <VSpace size={3} />

      <div css={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <TextLink
          variant="primary"
          css={{ fontSize: 28 }}
          link={postsLinks.listPosts}
        >
          More posts...
        </TextLink>
      </div>
    </DefaultLayout>
  );
}
