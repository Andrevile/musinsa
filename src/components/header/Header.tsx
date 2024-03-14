import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Container } from 'components/common/Container';
import { ReactNode } from 'react';

import { AppBar } from './AppBar';
import Filter from './Filter';
import { Search } from './Search';

export function Header({ children }: { children: ReactNode }) {
  return (
    <Head>
      {children}
      <Container
        css={css`
          height: 10px;
          background: #f1f1f1;
        `}
      />
    </Head>
  );
}

Header.AppBar = AppBar;
Header.Filter = Filter;
Header.Search = Search;

const Head = styled.header`
  z-index: 100;
  position: fixed;
  width: 100%;
  min-width: 95px;
  background: #ffffff;
`;
