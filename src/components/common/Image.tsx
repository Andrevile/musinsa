import { css } from '@emotion/react';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  objectFit?: 'fill' | 'contain' | 'cover';
}

export const Image = ({ src, alt, fallbackSrc, objectFit = 'cover', ...rest }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      css={css`
        width: 100%;
        height: 100%;
        object-fit: ${objectFit};
      `}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = `${fallbackSrc}`;
      }}
      {...rest}
    />
  );
};
