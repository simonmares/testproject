import React from "react";
import { PostPayload } from "src/domain-posts/types";
import { PostMediumCard } from "./PostMediumCard";

export function PostSmallCard(props: { post: PostPayload }) {
  return <PostMediumCard {...props} />;
}
