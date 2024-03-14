import { css, useTheme } from '@emotion/react';
import { HTMLAttributes } from 'react';

import { EmptyIcon } from './icons/EmptyIcon';

export const Empty = ({ ...rest }: HTMLAttributes<HTMLSpanElement>) => {
  const theme = useTheme();

  return (
    <span
      {...rest}
      css={css`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <EmptyIcon />
      <span
        css={css`
          margin-top: 4px;
          font-weight: ${theme.fontWeight.regular};
          font-size: 14px;
          line-height: 1.5;
          color: #aaaaaa;
        `}
      >
        검색 결과 없음
      </span>
    </span>
  );
};
