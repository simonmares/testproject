import { __themeInternalOnly } from "./useTheme";

export type AppTheme = typeof __themeInternalOnly;

export type AppThemeProp = {
  color: keyof AppTheme["colors"];
  textFontSizes: keyof AppTheme["textFontSizes"];
};

export type SystemSpec = {
  space: 0 | 1 | 2 | 3 | 4;
  textFontSizes: 0 | 1 | 2 | 3; // 0=base text, 1-3 => larger than previous
};
