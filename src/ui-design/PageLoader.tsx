import React, { useState } from "react";
import { css } from "@emotion/core";
import { useTimeout } from "src/utils-react/timers";
import { useTheme } from "src/pkg-theme/useTheme";

/* original source from https://codepen.io/xwildeyes/pen/KpqVzN */

function DotItem(props: {}) {
  return (
    <span
      css={css`
        animation-name: LoadingDots__blink;
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
      `}
    >
      .
    </span>
  );
}

export function DotAnimation(props: { color: string }) {
  const { color, ...pass } = props;
  return (
    <span
      css={css`
        cursor: help;
        color: ${color};

        @keyframes LoadingDots__blink {
          0% {
            opacity: 0.2;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }

        span:nth-of-type(2) {
          animation-delay: 0.2s;
        }

        span:nth-of-type(3) {
          animation-delay: 0.4s;
        }
      `}
      {...pass}
    >
      <DotItem />
      <DotItem />
      <DotItem />
    </span>
  );
}

export function PageLoader(props: {}) {
  const [delay, setDelay] = useState<"initial" | "short" | "long">("initial");
  const theme = useTheme();

  useTimeout(() => setDelay("short"), 700);
  useTimeout(() => setDelay("long"), 1400);

  const isShortOrLongDelay = delay === "short" || delay === "long";
  const isLongDelayOnly = delay === "long";
  const color = theme.colors.primary_900;
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div css={{ color, fontSize: 48 }}>
        <span
          css={{
            opacity: isLongDelayOnly ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          Just a second
        </span>{" "}
        <DotAnimation
          css={{
            opacity: isShortOrLongDelay ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          color={color}
        />
      </div>
    </div>
  );
}
