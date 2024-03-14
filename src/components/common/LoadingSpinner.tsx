import { css } from '@emotion/react';

import { Container } from './Container';
import { LoadingIcon } from './icons/LoadingIcon';

export const LoadingSpinner = () => {
  return (
    <Container
      css={css`
        padding: 16px 0 32px 0;
        display: flex;
        justify-content: center;
      `}
    >
      <span
        css={css`
          display: flex;
          justify-content: center;
          animation: rotate 1.5s linear infinite;

          @keyframes rotate {
            from {
              transform: rotate(0);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}
      >
        <LoadingIcon />
      </span>
    </Container>
  );
};
