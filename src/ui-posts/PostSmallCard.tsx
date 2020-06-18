import React from "react";
import { PostPayload } from "src/domain-posts/types";
import { BlockLink } from "src/ui-base/links";
import { Heading } from "src/ui-styles/structure";
import { PostMediumCard } from "./PostMediumCard";

export function PostSmallCard(props: { post: PostPayload }) {
  return <PostMediumCard {...props} />;
}
