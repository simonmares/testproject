import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { useFetchResource } from "src/pkg-resources/useFetchResource";
import { PostPayload, CommentPayload } from "src/domain-posts/types";
import { useRouter } from "next/dist/client/router";
import { DefaultErrorLayout } from "src/ui-app/DefaultErrorLayout";
import { NotFoundLayout } from "src/ui-app/NotFoundLayout";
import { useFetchList } from "src/pkg-resources/useFetchList";
import { PrimaryButton } from "src/ui-design/PrimaryButton";
import { VSpace } from "src/ui-styles/system";
import { UserPayload } from "src/domain-users/types";
import { TextLink } from "src/ui-base/links";

/**
 * Page loading logic:
 * - we fetch post detail and post comments at the same time (using suspense)
 * - if post detail as a critical resource fails, we render error layouts
 * - if comments fail, we let user re-fetch but still show the post detail, which is important
 */
export function PostPage(props: {}) {
  const router = useRouter();
  const postId = router.query.id;

  const postResource = useFetchResource<PostPayload, unknown>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/`
  );
  const commentsResource = useFetchList<CommentPayload, unknown>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );

  const userId = postResource.data?.userId;
  const userResource = useFetchResource<UserPayload, unknown>(() =>
    userId ? `https://jsonplaceholder.typicode.com/users/${userId}/` : null
  );

  if (postResource.error || userResource.error) {
    return <DefaultErrorLayout />;
  }
  if (!postResource.data || !userResource.data) {
    return <NotFoundLayout />;
  }

  const post = postResource.data;
  const user = userResource.data;
  return (
    <DefaultLayout>
      <div>{post.title}</div>
      by <TextLink href={`/user/${user.id}`}>{user.name}</TextLink>
      <VSpace size={2} />
      {commentsResource.data ? (
        <ul>
          {commentsResource.data.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <li>
                  {item.name} (by {item.email})
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      ) : (
        <div>
          Comments failed to fech{" "}
          <PrimaryButton
            onClick={() => {
              commentsResource.revalidate();
            }}
            size="small"
          >
            Retry
          </PrimaryButton>
        </div>
      )}
    </DefaultLayout>
  );
}
