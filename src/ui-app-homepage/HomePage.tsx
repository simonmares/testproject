import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { PageTitle } from "src/ui-design/PageTitle";
import { TextLink } from "src/ui-base/links";
import { useFetchList } from "src/pkg-resources/useFetchList";
import { PostPayload } from "src/domain-posts/types";
import { PostListing } from "src/ui-posts/PostListing";
import { VSpace } from "src/ui-styles/system";
import { PostSmallCard } from "src/ui-posts/PostSmallCard";

export function HomePage(props: {}) {
  const postsResource = useFetchList<PostPayload, unknown>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = (postsResource.data || []).slice(0, 10);
  return (
    <DefaultLayout>
      <PageTitle>Latest 10 posts</PageTitle>

      <VSpace size={[1, 2, 3]} />

      <PostListing items={posts} PostComponent={PostSmallCard} />

      <VSpace size={[1, 2, 3]} />

      <div css={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <TextLink css={{ fontSize: 28 }} href="/post">
          More posts...
        </TextLink>
      </div>
    </DefaultLayout>
  );
}
