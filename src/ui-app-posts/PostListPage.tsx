import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { NotFoundLayout } from "../ui-app/NotFoundLayout";
import { useListResource } from "../pkg-resources/useListResource";
import { PostPayload } from "../domain-posts/types";
import { DefaultErrorLayout } from "src/ui-app/DefaultErrorLayout";
import { PostListing } from "src/ui-posts/PostListing";
import { VSpace } from "src/ui-styles/system";
import { PageHeading } from "src/ui-design/PageHeading";
import { PostMediumCard } from "src/ui-posts/PostMediumCard";
import { PageHeadTitle } from "src/ui-app/appHead";

type InitialProps = {};

export function PostListPage(props: InitialProps) {
  const postsResource = useListResource<PostPayload, unknown>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (postsResource.error) {
    return <DefaultErrorLayout />;
  }
  if (!postsResource.data) {
    return <NotFoundLayout />;
  }
  return (
    <DefaultLayout>
      <PageHeading>All posts</PageHeading>
      <PageHeadTitle title={"All posts"} />
      <VSpace size={[1, 2, 3]} />
      <PostListing items={postsResource.data} PostComponent={PostMediumCard} />
    </DefaultLayout>
  );
}
