import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Container } from 'components/common/Container';

import { AppBar } from './AppBar';
import Filter from './Filter';
import { Search } from './Search';

export default function Header() {
  return (
    <Head>
      <AppBar />
      <Filter />
      {/* <Search /> */}
      <Container
        css={css`
          height: 10px;
          background: #f1f1f1;
        `}
      />
    </Head>
  );
}

const Head = styled.header`
  z-index: 1;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  min-width: 95px;
  background: #ffffff;
`;
