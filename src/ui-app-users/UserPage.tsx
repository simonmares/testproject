import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { useFetchResource } from "src/pkg-resources/useFetchResource";
import { UserPayload } from "src/domain-users/types";
import { NotFoundLayout } from "src/ui-app/NotFoundLayout";
import { useRouter } from "next/dist/client/router";
import { PageTitle } from "src/ui-design/PageTitle";
import { UserDetail } from "src/ui-users/UserDetail";
import { UserIcon } from "src/ui-icons/UserIcon";
import { HSpace, VSpace } from "src/ui-styles/system";
import { Heading } from "src/ui-styles/structure";
import { useTheme } from "src/pkg-theme/useTheme";
import { useLazyResource } from "src/pkg-resources/useLazyResource";
import { CommentPayload, PostPayload } from "src/domain-posts/types";

export function UserPage(props: {}) {
  const router = useRouter();
  const { colors } = useTheme();
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
      <UserDetail user={user} userPostsResource={userPostsResource} />
    </DefaultLayout>
  );
}
