export type PostPayload = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CommentPayload = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
