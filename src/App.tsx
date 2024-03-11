import { ThemeProvider } from '@emotion/react';
import PageLayout from 'components/common/PageLayout';
import ProductListPage from 'pages/ProductListPage';

import { GlobalStyle } from './GlobalStyle';

export const theme = {
  colors: {
    bgColor: '#FFFFFF',
    lightGray: '#F9F9F9',
    heavyGray: '#F1F1F1',
    red: '#FF0000',
  },
  fontWeight: {
    regular: '400',
    regularBold: '500',
    heavy: '700',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageLayout>
        <ProductListPage />
      </PageLayout>
    </ThemeProvider>
  );
}
