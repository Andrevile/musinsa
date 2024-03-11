import { css } from '@emotion/react';
import { Container } from 'components/common/Container';
import { LoadingSpinner } from 'components/common/LoadingSpinner';
import { ProductCard } from 'components/product/ProductCard';
import { ProductGrid } from 'components/product/ProductGrid';
import { useFetching } from 'hooks/useFetching';
import { useIntersect } from 'hooks/useIntersect';
import { useState } from 'react';
import { ProductType } from 'types/product';
import { getProductList } from 'utils/apis';

export default function ProductListPage() {
  const [page, setPage] = useState<number>(0);
  const [productList, setProductList] = useState<ProductType[]>([]);
  const hasNextPage = page < 3; //주어진 데이터의 구조 한계상 다음페이지 여부를 하드코딩

  const { isLoading } = useFetching(
    ['PRODUCT_LIST', `${page}`],
    async () => {
      const result = await getProductList({ params: page });
      return result.data.list;
    },
    {
      onSuccess: (data) => {
        if (data) {
          setProductList([...productList, ...data]);
        }
      },
    },
  );

  const { targetRef } = useIntersect({
    onIntersect: (entry) => {
      if (entry.isIntersecting && hasNextPage && !isLoading) {
        setPage(page + 1);
      }
    },
  });

  return (
    <main
      css={css`
        padding-top: 115px;
      `}
    >
      <Container
        css={css`
          position: relative;
          height: calc(100vh - 115px);
          overflow-x: hidden;
          overflow-y: scroll;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <ProductGrid itemList={productList} renderItem={(item, index) => <ProductCard key={index} product={item} />} />
        {isLoading && (
          <span
            css={css`
              ${!productList.length &&
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
    </main>
  );
}
