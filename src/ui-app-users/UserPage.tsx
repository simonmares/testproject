import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { useFetchResource } from "src/pkg-resources/useFetchResource";
import { UserPayload } from "src/domain-users/types";
import { NotFoundLayout } from "src/ui-app/NotFoundLayout";
import { useRouter } from "next/dist/client/router";
import { UserDetail } from "src/ui-users/UserDetail";
import { useLazyResource } from "src/pkg-resources/useLazyResource";
import { PostPayload } from "src/domain-posts/types";
import { PageHeadTitle } from "src/ui-app/appHead";

export function UserPage(props: {}) {
  const router = useRouter();
  const userId = router.query.id;
  const userResource = useFetchResource<UserPayload>(
    `https://jsonplaceholder.typicode.com/users/${userId}/`
  );

  const userPostsResource = useLazyResource<PostPayload[]>(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!userResource.data) {
    return <NotFoundLayout />;
  }

  const user = userResource.data;
  return (
    <DefaultLayout>
      <PageHeadTitle title={user.name} />
      <UserDetail user={user} userPostsResource={userPostsResource} />
    </DefaultLayout>
  );
}
