import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { NotFoundLayout } from "../ui-app/NotFoundLayout";
import { useFetchList } from "../pkg-resources/useFetchList";
import { PostPayload } from "../domain-posts/types";
import { DefaultErrorLayout } from "src/ui-app/DefaultErrorLayout";

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
      {posts.data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </DefaultLayout>
  );
}
