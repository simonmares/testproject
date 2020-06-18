const theme = {
  colors: {
    // primary
    primary_100: "#f8fdff",
    primary_500: "#ddf6ff",
    primary_900: "#00a3e0",

    // secondary
    secondary_900: "#EF476F",
  },
};

export const __themeInternalOnly = theme;

export function useTheme() {
  return theme;
}
