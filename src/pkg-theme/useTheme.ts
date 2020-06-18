const theme = {
  colors: {
    // primary
    primary_100: "#f8fdff",
    primary_500: "#ddf6ff",
    primary_900: "#00a3e0",

    // secondary
    secondary_900: "#EF476F",

    tone_quiet: "#737373",
    tone_highlight: "hotpink",
    tone_highlight_300: "#ffc6e2",
  },
};

export const __themeInternalOnly = theme;

export function useTheme() {
  return theme;
}
