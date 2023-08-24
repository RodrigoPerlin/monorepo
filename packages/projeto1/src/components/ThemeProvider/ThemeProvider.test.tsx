import React from 'react';
import { Text } from 'react-native';

import { themes } from '@olist/design-system-tokens';
import { render, screen } from '@testing-library/react-native';

import { ThemeProvider, getTheme, FALLBACK_THEME_WARNING } from './ThemeProvider';

describe('ThemeProvider', () => {
  describe('theming variations', () => {
    const expectedTheme = themes.olist.base;

    it('should return olist base theme when calling without arguments', () => {
      const baseTheme = getTheme();

      expect(baseTheme).toMatchObject(expectedTheme);
    });

    it('should return olist base theme without specifying variation', () => {
      const baseTheme = getTheme('olist');

      expect(baseTheme).toMatchObject(expectedTheme);
    });

    it('should return olist base theme with correct params', () => {
      const baseTheme = getTheme('olist', 'base');

      expect(baseTheme).toMatchObject(expectedTheme);
    });

    it('should return default theme when wrong variation', () => {
      const baseTheme = getTheme('olist', 'wrong');

      expect(baseTheme).toMatchObject(expectedTheme);
    });

    it('should return fallback theme', () => {
      console.error = jest.fn();
      const fallbackTheme = getTheme('wrong', 'parameter');

      expect(console.error).toHaveBeenCalledWith(FALLBACK_THEME_WARNING);
      expect(fallbackTheme).toMatchObject(expectedTheme);
    });
  });

  describe('rendering', () => {
    it('should render children', () => {
      render(
        <ThemeProvider>
          <Text>Test</Text>
        </ThemeProvider>,
      );

      expect(screen.getByText('Test')).toBeTruthy();
    });
  });
});
