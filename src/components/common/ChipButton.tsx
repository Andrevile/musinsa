import { css } from '@emotion/react';
import { HTMLAttributes, ReactNode, SVGProps } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  icon?: React.FC<SVGProps<SVGSVGElement>>;
  children?: ReactNode;
}

export function ChipButton({ primary = false, icon: Icon, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      css={css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        height: 35px;
        border-radius: 18px;
        background: #ffffff;
        border: 1px solid #eeeeee;
        padding: 7px 15px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        ${primary &&
        css`
          background: #0078ff;
          color: #ffffff;
        `}
        ${Icon &&
        css`
          padding: 7px 11px 7px 15px;
        `}
      `}
    >
      <span>{children}</span>
      {Icon && (
        <span
          css={css`
            position: relative;
            top: 2px;
            margin-left: 3px;
          `}
        >
          <Icon />
        </span>
      )}
    </button>
  );
}
