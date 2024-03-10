import { css, useTheme } from '@emotion/react';
import { Image } from 'components/common/Image';
import { PRODUCT_CARD_FALLBACK_IMAGE } from 'constants/product';
import { ReactNode } from 'react';

interface Props {
  productImageUrl: string;
  alt: string;
  ratio?: number;
  children?: ReactNode;
}

export const ProductThumbnail = ({ ratio = 1, productImageUrl, alt, children }: Props) => {
  return (
    <figure
      css={css`
        width: 100%;
        position: relative;
        padding-bottom: ${100 / ratio}%;
        overflow: hidden;
      `}
    >
      {children}
      <span
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        `}
      >
        <Image src={productImageUrl} alt={alt} fallbackSrc={PRODUCT_CARD_FALLBACK_IMAGE} objectFit='fill' />
      </span>
    </figure>
  );
};

ProductThumbnail.SoldOut = SoldOut;

function SoldOut() {
  const theme = useTheme();
  return (
    <span
      css={css`
        font-weight: ${theme.fontWeight.heavy};
        font-size: 20px;
        color: #777777;
        line-height: 1.1;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: inline-flex;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        background: #ffffff;
        justify-content: center;
        align-items: center;
      `}
    >
      SOLD OUT
    </span>
  );
}
