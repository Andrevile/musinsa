import PageLayout from '@components/common/PageLayout';
import { ThemeProvider } from '@emotion/react';
import MainPage from '@pages/MainPage';

import { GlobalStyle } from './GlobalStyle';

const theme = {
  colors: {
    bgColor: '#FFFFFF',
    lightGray: '#F9F9F9',
    heavyGray: '#F1F1F1',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageLayout>
        <MainPage />
      </PageLayout>
    </ThemeProvider>
  );
}
