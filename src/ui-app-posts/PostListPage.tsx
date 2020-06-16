import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { NotFoundLayout } from "../ui-app/NotFoundLayout";
import { useFetchList } from "../pkg-resources/useFetchList";
import { PostPayload } from "../domain-posts/types";
import { DefaultErrorLayout } from "src/ui-app/DefaultErrorLayout";
import { TextLink } from "src/ui-base/links";
import { PostListing } from "src/ui-posts/PostListing";
import { Heading } from "src/ui-styles/structure";
import { VSpace } from "src/ui-styles/system";
import { PageTitle } from "src/ui-design/PageTitle";

type InitialProps = {};

export function PostListPage(props: InitialProps) {
  const posts = useFetchList<PostPayload, unknown>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (posts.error) {
    return <DefaultErrorLayout />;
  }
  if (!posts.data) {
    return <NotFoundLayout />;
  }
  return (
    <DefaultLayout>
      <PageTitle>Posts</PageTitle>
      <VSpace size={[1, 2, 3]} />
      <PostListing items={posts.data} />
    </DefaultLayout>
  );
}
