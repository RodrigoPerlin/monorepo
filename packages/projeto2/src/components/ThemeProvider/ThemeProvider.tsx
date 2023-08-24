import React from "react";

import { themes } from "@olist/design-system-tokens";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";

type Theme = { olist: typeof themes.olist.base };
type ThemeType = keyof typeof themes;
type VariationType = keyof (typeof themes)[keyof typeof themes];

declare module "styled-components/native" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
interface IThemeProviderProps {
  children: React.ReactNode;
  theme?: string;
  variation?: string;
}

const DEFAULT_PREFIX = "olist";
const DEFAULT_THEME_NAME = "olist";
const DEFAULT_VARIATION_NAME = "base";
export const FALLBACK_THEME_WARNING =
  "[olistds] Wrong theme specified. Loading fallback theme.";

const DEFAULT_THEME: typeof themes.olist.base =
  themes[DEFAULT_THEME_NAME][DEFAULT_VARIATION_NAME];

export function getTheme(
  theme: IThemeProviderProps["theme"] = DEFAULT_THEME_NAME,
  variation: IThemeProviderProps["variation"] = DEFAULT_VARIATION_NAME
) {
  try {
    return (
      themes[theme as ThemeType][variation as VariationType] || DEFAULT_THEME
    );
  } catch (e) {
    console.error(FALLBACK_THEME_WARNING);
  }

  return DEFAULT_THEME;
}

export function ThemeProvider({
  children,
  theme,
  variation,
}: IThemeProviderProps) {
  const currentTheme = getTheme(theme, variation);

  return (
    <StyledThemeProvider
      theme={{
        [DEFAULT_PREFIX]: currentTheme,
      }}
    >
      {children}
    </StyledThemeProvider>
  );
}
