export const postsLinks = {
  listPosts: {
    href: "/post",
    as: "/post",
  },
  postDetail: (id: number) => ({
    href: `/post/[id]`,
    as: `/post/${id}`,
  }),
};
