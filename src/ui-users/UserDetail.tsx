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

// import { default as MailIcon } from "react-feather/dist/icons/mail";
// import { default as LinkIcon } from "react-feather/dist/icons/globe";
// import { default as PhoneIcon } from "react-feather/dist/icons/phone";

const MailIcon = UserIcon;
const LinkIcon = UserIcon;
const PhoneIcon = UserIcon;

function InfoBlock(props: WithHtmlProps<{ children: React.ReactNode }>) {
  const { children, ...passProps } = props;
  const { colors } = useTheme();
  return (
    <div
      css={{
        borderTop: `8px solid ${colors.primary_700}`,
        backgroundColor: "#eaeaea2b",
        boxShadow: "1px 1px 1px #d8d8d8",
        borderRadius: "8px",
      }}
      {...passProps}
    >
      <div
        css={{
          padding: "16px",
          background: colors.greyscale_100,
          boxShadow: "0px -1px 1px #66c3e6",
          borderRadius: "0 0 8px 8px",
        }}
      >
        {children}
      </div>
    </div>
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
        <InfoBlock
          css={{ width: 340, maxWidth: "100%", boxSizing: "border-box" }}
        >
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 11fr",
              gridGap: "8px 16px",
            }}
          >
            <MailIcon size={28} />
            <div>
              <FormatEmail value={user.email} />
            </div>
            <PhoneIcon size={28} />
            <div>
              <FormatPhone value={user.phone} />
            </div>
            <LinkIcon size={28} />
            <div>
              <FormatWebsite value={user.website} />
            </div>
          </div>
        </InfoBlock>
      </div>
    </div>
  );
}
