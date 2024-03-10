import { css } from '@emotion/react';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Container = forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => {
  return (
    <div
      ref={ref}
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
});

Container.displayName = 'Container';
