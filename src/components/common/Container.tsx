import { css } from '@emotion/react';
import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  childrend?: ReactNode;
}

export function Container({ children, ...rest }: Props) {
  return (
    <div
      {...rest}
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
      `}
    >
      {children}
    </div>
  );
}
