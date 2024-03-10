import { Container } from '@components/common/Container';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { AppBar } from './AppBar';
import Filter from './Filter';

export default function Header() {
  return (
    <Head>
      <AppBar />
      <Filter />
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
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  min-width: 95px;
  background: #ffffff;
  padding-bottom: 10px;
`;
