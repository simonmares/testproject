import React from "react";
import { UserPayload } from "src/domain-users/types";
import { PostPayload, CommentPayload } from "src/domain-posts/types";
import { TextLink } from "src/ui-base/links";
import { VSpace, SystemText } from "src/ui-styles/system";
import { PrimaryButton } from "src/ui-design/PrimaryButton";
import { Heading } from "src/ui-styles/structure";
import { UnorderedList } from "src/ui-styles/resetHtml";

export function PostDetail(props: {
  user: UserPayload;
  post: PostPayload;
  comments: CommentPayload[];
}) {
  const { post, user, comments } = props;
  return (
    <article>
      <div>{post.title}</div>
      by <TextLink href={`/user/${user.id}`}>{user.name}</TextLink>
      <VSpace size={3} />
      <section>
        <Heading level={3}>Comments</Heading>
        <VSpace />
        {comments.length > 0 ? (
          <UnorderedList>
            {comments.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <li>
                    {item.name} (by {item.email})
                  </li>
                </React.Fragment>
              );
            })}
          </UnorderedList>
        ) : (
          <SystemText color="tone_quiet">There are no comments</SystemText>
        )}
      </section>
    </article>
  );
}
