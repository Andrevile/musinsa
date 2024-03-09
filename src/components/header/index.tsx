import { Container } from '@components/common/Container';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { Logo } from './Logo';

export default function Header() {
  const theme = useTheme();

  return (
    <Head>
      <Container
        css={css`
          background: ${theme.colors.bgColor};
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <Logo />
      </Container>
    </Head>
  );
}

const Head = styled.header`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  min-width: 95px;
  background: #f1f1f1;
  padding-bottom: 10px;
`;
