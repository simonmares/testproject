import React from "react";
import { UserPayload } from "src/domain-users/types";
import { VSpace, SystemInline } from "src/ui-styles/system";
import { useTheme } from "src/pkg-theme/useTheme";
import { mq } from "src/utils-styles/responsive";
import { UserIcon } from "src/ui-icons/UserIcon";
import { FormatEmail, FormatPhone, FormatWebsite } from "src/ui-format/strings";
import { Heading } from "src/ui-styles/structure";
import { MailIcon } from "src/ui-icons/MailIcon";
import { PhoneIcon } from "src/ui-icons/PhoneIcon";
import { WebIcon } from "src/ui-icons/WebIcon";
import { LazyResource } from "src/pkg-resources/types";
import { PostPayload } from "src/domain-posts/types";
import { TextEnumeration } from "src/ui-design/TextEnumeration";
import { TextLink } from "src/ui-base/links";
import { LazyResourceContent } from "src/ui-resources/LazyResourceContent";
import { postsLinks } from "src/ui-app-posts";

function FormatAddress(props: { address: UserPayload["address"] }) {
  const { address } = props;
  return (
    <div>
      {address.suite}, {address.street}
      <div>
        {address.city} {address.zipcode}
      </div>
    </div>
  );
}

function LatestPostsSection(props: { userPosts: PostPayload[] }) {
  const { userPosts } = props;
  const sliceCount = Math.min(userPosts.length, 5);
  return (
    <section>
      <Heading level={2}>Latest {sliceCount} posts</Heading>
      <TextEnumeration>
        {userPosts.slice(0, sliceCount).map((item) => {
          return (
            <React.Fragment key={item.id}>
              <li css={{ marginBottom: 8 }}>
                <TextLink link={postsLinks.postDetail(item.id)}>
                  {item.title}
                </TextLink>
              </li>
            </React.Fragment>
          );
        })}
      </TextEnumeration>
    </section>
  );
}

function InfoSection(props: { user: UserPayload }) {
  const { user } = props;
  const { colors } = useTheme();
  return (
    <section
      css={mq({
        borderTop: `8px solid ${colors.primary_700}`,
        backgroundColor: "#eaeaea2b",
        boxShadow: "1px 1px 1px #d8d8d8",
        borderRadius: "8px",
        width: ["100%", "100%", 340],
        maxWidth: "100%",
        boxSizing: "border-box",
      })}
    >
      <div
        css={mq({
          padding: ["8px", "16px 32px"],
          background: colors.greyscale_100,
          boxShadow: "0px -1px 1px #66c3e6",
          borderRadius: "0 0 8px 8px",
        })}
      >
        <Heading
          fontWeight={600}
          themeColor="text_700"
          fontSize={20}
          level={2}
          css={{ textAlign: "center" }}
        >
          Contact
        </Heading>

        <VSpace size={2} />

        <FormatAddress address={user.address} />

        <VSpace size={2} />

        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 11fr",
            gridGap: "8px 16px",
            alignItems: "center",
          }}
        >
          <MailIcon color={colors.primary_900} size={24} />
          <div>
            <FormatEmail value={user.email} />
          </div>
          <PhoneIcon color={colors.primary_900} size={24} />
          <div>
            <FormatPhone value={user.phone} />
          </div>
          <WebIcon color={colors.primary_900} size={24} />
          <div>
            <FormatWebsite value={user.website} />
          </div>
        </div>
      </div>
    </section>
  );
}

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

function useEffectOnMount(fn: ArgumentTypes<typeof React.useEffect>[0]) {
  React.useEffect(fn, []); // eslint-disable-line
}

export function UserDetail(props: {
  user: UserPayload;
  userPostsResource: LazyResource<PostPayload[]>;
}) {
  const { user, userPostsResource } = props;
  const { colors } = useTheme();

  useEffectOnMount(() => {
    userPostsResource.lazyLoad();
  });

  return (
    <div>
      <div>
        <section
          css={mq({
            display: "flex",
            alignItems: "center",
            flexDirection: ["column", "column", "row"],
          })}
        >
          <Heading css={{ display: "flex", alignItems: "center" }} level={1}>
            <UserIcon
              size={22}
              color={colors.tone_quiet}
              css={{ marginRight: 8 }}
            />{" "}
            {user.name}
          </Heading>
          <SystemInline
            fontSize={1}
            css={{ marginLeft: 16 }}
            color="tone_quiet"
          >
            &#64;{user.username}
          </SystemInline>
        </section>

        <VSpace />

        <section>
          Works at{" "}
          <SystemInline css={{ fontWeight: 600 }} color="text_700" as="strong">
            {user.company.name}
          </SystemInline>{" "}
          ({user.company.bs}).
        </section>
      </div>

      <VSpace size={3} />

      <div
        css={mq({
          display: "grid",
          alignItems: "start",
          gridGap: [16, 32],
          gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
        })}
      >
        <InfoSection user={user} />
        <LazyResourceContent
          message="Loading user's posts"
          loadMode="manual"
          resource={userPostsResource}
        >
          {(data) => <LatestPostsSection userPosts={data || []} />}
        </LazyResourceContent>
      </div>
    </div>
  );
}
