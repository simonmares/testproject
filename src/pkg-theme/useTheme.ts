type SpacingSize = 0 | 1 | 2 | 3 | 4;

const spacingToValues = { 0: 0, 1: 8, 2: 16, 3: 32, 4: 64 };

function getSystemSpace(val: SpacingSize) {
  return spacingToValues[val];
}

const theme = {
  colors: {
    // primary
    primary_100: "#f8fdff",
    primary_500: "#ddf6ff",
    primary_700: "#c8f0ff",
    primary_900: "#00a3e0",
    // secondary
    secondary_900: "#EF476F",
    // tones
    tone_quiet: "#737373",
    tone_highlight: "hotpink",
    tone_highlight_300: "#ffc6e2",
    // text
    text_300: "#6d6868",
    border_100: "#f0f0f0",
    // greyscale background
    greyscale_100: "#f9f9f9",
    greyscale_300: "#dedede",
  },
  textFontSizes: ["1rem", "1.2rem", "1.3rem", "1.4rem"],
  system: {
    space: getSystemSpace,
  },
};

export const __themeInternalOnly = theme;

export function useTheme() {
  return theme;
}
