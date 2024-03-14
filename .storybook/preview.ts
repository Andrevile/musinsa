import type { Preview } from '@storybook/react';
import { GlobalStyle } from '../src/GlobalStyle';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/App';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle,
    themes: {
      theme,
    },
    Provider: ThemeProvider,
  }),
];
