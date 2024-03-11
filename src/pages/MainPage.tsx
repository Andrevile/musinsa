import { css } from '@emotion/react';
import { Container } from 'components/common/Container';
import { ProductCard } from 'components/product/ProductCard';
import { ProductGrid } from 'components/product/ProductGrid';
import { useFetching } from 'hooks/useFetching';
import { useEffect, useState } from 'react';
import { ProductType } from 'types/product';
import { getProductList } from 'utils/apis';
import { sleep } from 'utils/sleep';

export default function MainPage() {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const { data, isLoading } = useFetching(
    ['PRODUCT_LIST', '1'],
    async () => {
      const result = await getProductList({ params: 1 });
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

  useEffect(() => {
    console.log({ isLoading });
    console.log({ data });
  }, [data, isLoading]);

  return (
    <main
      css={css`
        padding-top: 115px;
      `}
    >
      <Container
        css={css`
          height: calc(100vh - 115px);
          overflow-x: hidden;
          overflow-y: scroll;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <ProductGrid itemList={productList} renderItem={(item) => <ProductCard key={item.goodsNo} product={item} />} />
      </Container>
    </main>
  );
}
