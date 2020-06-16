import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { useFetchResource } from "src/pkg-resources/useFetchResource";
import { UserPayload } from "src/domain-users/types";
import { NotFoundLayout } from "src/ui-app/NotFoundLayout";
import { useRouter } from "next/dist/client/router";

export function UserPage(props: {}) {
  const router = useRouter();
  const userId = router.query.id;
  const userResource = useFetchResource<UserPayload, unknown>(
    `https://jsonplaceholder.typicode.com/users/${userId}/`
  );

  if (!userResource.data) {
    return <NotFoundLayout />;
  }

  const user = userResource.data;
  return (
    <DefaultLayout>
      {user.name}

      <ul>
        <li>{user.email}</li>
        <li>{user.username}</li>
        <li>{user.phone}</li>
        <li>{user.website}</li>
      </ul>
    </DefaultLayout>
  );
}
