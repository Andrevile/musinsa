import { css } from '@emotion/react';
import { Container } from 'components/common/Container';
import { LoadingSpinner } from 'components/common/LoadingSpinner';
import PageLayout from 'components/common/PageLayout';
import Header from 'components/header';
import { ProductCard } from 'components/product/ProductCard';
import { ProductGrid } from 'components/product/ProductGrid';
import { useProductListService } from 'hooks/product-list/useProductListService';
import { useState } from 'react';
import { FilterOptionType } from 'types/filter';

export default function ProductListPage() {
  const [filterList, setFilterList] = useState<FilterOptionType[]>([]);
  const { targetRef, isLoading, filteredProductList } = useProductListService({ filterList });

  const handleFilterList = (filterList: FilterOptionType[]) => {
    setFilterList(filterList);
  };

  return (
    <PageLayout>
      <Header>
        <Header.AppBar />
        <Header.Filter filterList={filterList} handleFilterList={handleFilterList} />
        {/* <Header.Search /> */}
      </Header>
      <main
        css={css`
          padding-top: 115px;
          ::-webkit-scrollbar {
            display: none;
          }
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
          <ProductGrid
            itemList={filteredProductList}
            renderItem={(item, index) => <ProductCard key={index} product={item} />}
          />
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
      </main>
    </PageLayout>
  );
}
