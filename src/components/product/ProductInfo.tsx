import { css, useTheme } from '@emotion/react';
import { Container } from 'components/common/Container';
import { ReactNode } from 'react';
import { formatingPrice } from 'utils/formatingPrice';

export const ProductInfo = ({ children }: { children?: ReactNode }) => {
  return (
    <Container
      css={css`
        position: relative;
        width: 100%;
        height: 140px;
        padding: 20px 10px;
      `}
    >
      {children}
    </Container>
  );
};

ProductInfo.Brand = Brand;
ProductInfo.Name = Name;
ProductInfo.Price = Price;
ProductInfo.Exclusive = ExClusive;

function Brand({ brand }: { brand: { name: string; url: string } }) {
  const { name, url } = brand;
  const theme = useTheme();

  return (
    <a
      href={url}
      css={css`
        display: inline-block;
        cursor: pointer;
        margin-bottom: 8px;
      `}
    >
      <p
        css={css`
          font-size: 11px;
          font-weight: ${theme.fontWeight.regular};
          line-height: 1.454;
        `}
      >
        {name}
      </p>
    </a>
  );
}

function Name({ productName }: { productName: string }) {
  const theme = useTheme();
  return (
    <p
      css={css`
        font-weight: ${theme.fontWeight.heavy};
        font-size: 14px;
        line-height: 1.285;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 4px;
      `}
    >
      {productName}
    </p>
  );
}

function Price({
  price,
}: {
  price: { currentPrice: number; beforePrice?: number; isSale?: boolean; saleRate?: number };
}) {
  const { currentPrice, beforePrice, isSale, saleRate } = price;
  const theme = useTheme();

  return (
    <>
      <p
        css={css`
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          line-height: 1.5;
          font-weight: ${theme.fontWeight.heavy};
        `}
      >
        <span css={css``}>{formatingPrice(currentPrice)}</span>
        {isSale && (
          <span
            css={css`
              color: ${theme.colors.red};
            `}
          >{`${saleRate}%`}</span>
        )}
      </p>
      {isSale && (
        <p
          css={css`
            color: #aaaaaa;
            font-size: 11px;
            line-height: 1.05;
            font-weight: ${theme.fontWeight.heavy};
            text-decoration: line-through;
          `}
        >
          {formatingPrice(beforePrice)}
        </p>
      )}
    </>
  );
}

function ExClusive() {
  return (
    <span
      css={css`
        position: absolute;
        top: -13px;
        display: inline-block;
        height: 26px;
        background: #18a286;
        padding: 4px 6px;
        font-size: 12px;
        line-height: 1.5;
        color: #ffffff;
      `}
    >
      단독
    </span>
  );
}
