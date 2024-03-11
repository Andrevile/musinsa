import { css } from '@emotion/react';
import { ChipButton } from 'components/common/ChipButton';
import { Container } from 'components/common/Container';
import { SearchIcon } from 'components/common/icons/SearchIcon';
import { LoadingSpinner } from 'components/common/LoadingSpinner';
import PageLayout from 'components/common/PageLayout';
import Header from 'components/header';
import { ProductCard } from 'components/product/ProductCard';
import { ProductGrid } from 'components/product/ProductGrid';
import { useSearch } from 'hooks/common/useSearch';
import { useProductListService } from 'hooks/product-list/useProductListService';
import { useState } from 'react';

export default function ProductListPage() {
  const [queryList, setQueryList] = useState<string[]>([]);
  const { targetRef, isLoading, filteredProductList } = useProductListService({ filterList: queryList });
  const { searchModeOnOff, toggleSearchMode, isIncludeKeyword } = useSearch();

  const paddingTop = queryList.length ? '165px' : '115px';

  const handleQueryList = (filterList: string[]) => {
    setQueryList(filterList);
  };

  return (
    <PageLayout>
      <Header>
        <Header.AppBar />
        <Header.Filter filterList={queryList} handleFilterList={handleQueryList}>
          <ChipButton
            icon={<SearchIcon />}
            onToggle={toggleSearchMode}
            primary={searchModeOnOff}
            highlight={!searchModeOnOff && isIncludeKeyword(queryList)}
          >
            검색
          </ChipButton>
        </Header.Filter>
        {searchModeOnOff && <Header.Search />}
      </Header>
      <main
        css={css`
          padding-top: ${paddingTop};
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
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
