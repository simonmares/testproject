import React from "react";

import { DefaultLayout } from "../ui-app/DefaultLayout";
import { useResource } from "src/pkg-resources/useResource";
import { PostPayload, CommentPayload } from "src/domain-posts/types";
import { useRouter } from "next/dist/client/router";
import { DefaultErrorLayout } from "src/ui-app/DefaultErrorLayout";
import { NotFoundLayout } from "src/ui-app/NotFoundLayout";
import { useListResource } from "src/pkg-resources/useListResource";
import { VSpace } from "src/ui-styles/system";
import { UserPayload } from "src/domain-users/types";
import { TextLink } from "src/ui-base/links";
import { PageInlineNotification } from "src/ui-base/PageInlineNotification";
import { SystemInline } from "src/ui-styles/system";
import { Heading } from "src/ui-styles/structure";
import { UnorderedList } from "src/ui-styles/resetHtml";
import { FormatEmail } from "src/ui-format/strings";
import { useTheme } from "src/pkg-theme/useTheme";
import { PageHeadTitle } from "src/ui-app/appHead";
import { usersLinks } from "src/ui-app-users";

function PostComment(props: { comment: CommentPayload }) {
  const { comment } = props;
  const { colors } = useTheme();
  return (
    <div
      css={{ paddingLeft: 16, borderLeft: `1px solid ${colors.border_100}` }}
    >
      <Heading
        themeColor="text_300"
        level={3}
        fontSize="1rem"
        fontWeight="bold"
      >
        {comment.name}
      </Heading>
      <div css={{ marginBottom: 2, marginTop: 2 }}>
        <SystemInline color="tone_quiet">from</SystemInline>{" "}
        <FormatEmail value={comment.email} />
      </div>
      {comment.body}
    </div>
  );
}

function PostDetail(props: {
  user: UserPayload;
  post: PostPayload;
  comments: CommentPayload[];
}) {
  const { post, user, comments } = props;
  return (
    <div>
      <Heading level={1}>{post.title}</Heading>
      <VSpace size={2} />
      <div>
        by{" "}
        <TextLink link={usersLinks.userDetail(user.id)}>{user.name}</TextLink>
      </div>
      <VSpace size={3} />

      <article>{post.body}</article>
      <VSpace size={3} />
      <section
        css={{
          width: 600,
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <Heading level={3}>Comments</Heading>
        <VSpace />
        {comments.length > 0 ? (
          <UnorderedList>
            {comments.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <li css={{ marginBottom: 16 }}>
                    <PostComment comment={item} />
                  </li>
                </React.Fragment>
              );
            })}
          </UnorderedList>
        ) : (
          <SystemInline color="tone_quiet">There are no comments</SystemInline>
        )}
      </section>
    </div>
  );
}

/**
 * Page loading logic:
 * - we fetch post detail and post comments at the same time (using suspense)
 * - if post detail as a critical resource fails, we render error layouts
 * - if comments fail, we let user re-fetch but still show the post detail, which is important
 */
export function PostPage(props: {}) {
  const router = useRouter();
  const postId = router.query.id;

  const postResource = useResource<PostPayload, unknown>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const commentsResource = useListResource<CommentPayload, unknown>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );

  const userId = postResource.data?.userId;
  const userResource = useResource<UserPayload, unknown>(() =>
    userId ? `https://jsonplaceholder.typicode.com/users/${userId}` : null
  );

  if (postResource.error || userResource.error) {
    return <DefaultErrorLayout />;
  }
  if (!postResource.data || !userResource.data) {
    return <NotFoundLayout />;
  }

  const post = postResource.data;
  const user = userResource.data;
  const comments = commentsResource.data;
  const commentsFetchFailed = !commentsResource.data;

  return (
    <DefaultLayout>
      <PageHeadTitle title={post.title} />

      {commentsFetchFailed ? (
        <PageInlineNotification.Layout>
          <PageInlineNotification tone="warning">
            <div>
              Comments failed to fech{" "}
              <button
                onClick={() => {
                  commentsResource.revalidate();
                }}
              >
                Retry
              </button>
            </div>
          </PageInlineNotification>
        </PageInlineNotification.Layout>
      ) : null}

      <PostDetail comments={comments || []} post={post} user={user} />
    </DefaultLayout>
  );
}
