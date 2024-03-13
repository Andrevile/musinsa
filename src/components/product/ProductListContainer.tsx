import { css } from '@emotion/react';
import { Container } from 'components/common/Container';
import { Empty } from 'components/common/Empty';
import { LoadingSpinner } from 'components/common/LoadingSpinner';
import { useProductListService } from 'hooks/product-list/useProductListService';

import { ProductCard } from './ProductCard';
import { ProductGrid } from './ProductGrid';

export const ProductListContainer = () => {
  const { filterList, targetRef, isLoading, filteredProductList } = useProductListService();

  const paddingTop = filterList.length ? '165px' : '115px';
  if (!filteredProductList.length && filterList.length) {
    return <Empty />;
  }

  return (
    <Container
      css={css`
        position: relative;
        height: calc(100vh - ${paddingTop});

        overflow-x: hidden;
        overflow-y: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      <ProductGrid itemList={filteredProductList} renderItem={(item) => <ProductCard product={item} />} />
      {isLoading && (
        <span
          css={css`
            ${!filteredProductList.length &&
            css`
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `}
          `}
        >
          <LoadingSpinner />
        </span>
      )}
      <Container
        css={css`
          height: 10px;
        `}
        ref={(ref) => {
          targetRef.current = ref;
        }}
      />
    </Container>
  );
};
