export const usersLinks = {
  userDetail: (id: number) => ({
    href: "/user/[id]",
    as: `/user/${id}`,
  }),
};
