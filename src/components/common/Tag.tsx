import { css } from '@emotion/react';
import { HTMLAttributes } from 'react';

import { CloseIcon } from './icons/CloseIcon';

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, 'onClick'> {
  item: { id: string; text: string };
  closable?: boolean;
  onClose?: (id: string) => void;
}

export function Tag({ item, closable = true, onClose, ...rest }: Props) {
  return (
    <span
      css={css`
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        height: 26px;
        border-radius: 4px;
        background: #0078ff;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        padding: 4px 8px;
      `}
      {...rest}
    >
      <span>{item.text}</span>
      {closable && (
        <span
          onClick={() => onClose?.(item.id)}
          css={css`
            cursor: pointer;
            position: relative;
            top: 2px;
            margin-left: 4px;
          `}
        >
          <CloseIcon />
        </span>
      )}
    </span>
  );
}
