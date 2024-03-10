import { css } from '@emotion/react';
import { Container } from 'components/common/Container';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { ProductType } from 'types/product';

import { ProductInfo } from './ProductInfo';
import { ProductThumbnail } from './ProductThumbnail';

interface Props extends HTMLAttributes<HTMLDivElement> {
  product: ProductType;
  children?: ReactNode;
}

export const ProductCard = forwardRef<HTMLDivElement, Props>(({ product, children, ...rest }, ref) => {
  const { goodsName, imageUrl, brandName, brandLinkUrl, price, normalPrice, isSale, saleRate, isExclusive, isSoldOut } =
    product;
  return (
    <Container
      ref={ref}
      {...rest}
      css={css`
        background: #ffffff;
        width: 100%;
        min-width: 188px;
        height: 100%;
      `}
    >
      <a
        href={product.linkUrl}
        css={css`
          cursor: pointer;
        `}
      >
        <ProductThumbnail ratio={0.832} productImageUrl={imageUrl} alt={`product-${goodsName}-image`}>
          {isSoldOut && <ProductThumbnail.SoldOut />}
        </ProductThumbnail>
      </a>
      <ProductInfo>
        {isExclusive && <ProductInfo.Exclusive />}
        <ProductInfo.Brand brand={{ name: brandName, url: brandLinkUrl }} />
        <a
          href={product.linkUrl}
          css={css`
            cursor: pointer;
          `}
        >
          <ProductInfo.Name productName={goodsName} />
        </a>
        <ProductInfo.Price price={{ currentPrice: price, beforePrice: normalPrice, isSale, saleRate }} />
      </ProductInfo>
      {children}
    </Container>
  );
});

ProductCard.displayName = 'ProductCard';
