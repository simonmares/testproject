import React from "react";
import { UserPayload } from "src/domain-users/types";
import { VSpace, SystemText } from "src/ui-styles/system";
import { useTheme } from "src/pkg-theme/useTheme";
import { mq } from "src/utils-styles/responsive";
import { UserIcon } from "src/ui-icons/UserIcon";
import { UnorderedList } from "src/ui-styles/resetHtml";
import { FormatEmail, FormatPhone, FormatWebsite } from "src/ui-format/strings";
import { Heading } from "src/ui-styles/structure";
import { WithHtmlProps } from "src/app-types/components";
import { MailIcon } from "src/ui-icons/MailIcon";
import { PhoneIcon } from "src/ui-icons/PhoneIcon";
import { LinkIcon } from "src/ui-icons/LinkIcon";

function InfoSection(props: { user: UserPayload }) {
  const { user } = props;
  const { colors } = useTheme();
  return (
    <section
      css={{
        borderTop: `8px solid ${colors.primary_700}`,
        backgroundColor: "#eaeaea2b",
        boxShadow: "1px 1px 1px #d8d8d8",
        borderRadius: "8px",
        width: 340,
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        css={{
          padding: "16px 32px",
          background: colors.greyscale_100,
          boxShadow: "0px -1px 1px #66c3e6",
          borderRadius: "0 0 8px 8px",
        }}
      >
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
          <LinkIcon color={colors.primary_900} size={24} />
          <div>
            <FormatWebsite value={user.website} />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlockListItem(props: { children: React.ReactNode }) {
  return <li {...props} />;
}

export function UserDetail(props: { user: UserPayload }) {
  const { user } = props;
  const { colors, system } = useTheme();

  return (
    <div>
      <Heading
        level={1}
        css={mq({
          display: "flex",
          alignItems: "center",
          flexDirection: ["column", "row"],
        })}
      >
        <UserIcon color={colors.tone_quiet} css={{ marginRight: 8 }} />
        {user.name}
        <SystemText fontSize={1} css={{ marginLeft: 16 }} color="tone_quiet">
          &#64;{user.username}
        </SystemText>
      </Heading>

      <VSpace size={3} />

      <div css={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <InfoSection user={user} />
      </div>
    </div>
  );
}
