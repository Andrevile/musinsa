import { css } from '@emotion/react';
import { ChipButton } from 'components/common/ChipButton';
import { Container } from 'components/common/Container';
import { Empty } from 'components/common/Empty';
import { SearchIcon } from 'components/common/icons/SearchIcon';
import { LoadingSpinner } from 'components/common/LoadingSpinner';
import PageLayout from 'components/common/PageLayout';
import Header from 'components/header';
import { AutoComplete } from 'components/header/AutoComplete';
import { ProductCard } from 'components/product/ProductCard';
import { ProductGrid } from 'components/product/ProductGrid';
import { useSearch } from 'hooks/common/useSearch';
import { useProductListService } from 'hooks/product-list/useProductListService';

export default function ProductListPage() {
  const { filterList, targetRef, isLoading, filteredProductList } = useProductListService();

  const {
    error,
    keyword,
    inputRef,
    searchModeOnOff,
    toggleSearchMode,
    isIncludeKeyword,
    handleChangeSearchInput,
    onSearch,
    onBlur,
  } = useSearch();

  const paddingTop = filterList.length ? '165px' : '115px';

  return (
    <PageLayout>
      <Header>
        <Header.AppBar />
        <Header.Filter
          searchSection={
            <ChipButton
              icon={<SearchIcon />}
              onToggle={toggleSearchMode}
              primary={searchModeOnOff}
              highlight={!searchModeOnOff && isIncludeKeyword(filterList)}
            >
              검색
            </ChipButton>
          }
        />
        {searchModeOnOff && (
          <Header.Search
            ref={inputRef}
            autoComplete={<AutoComplete keyword={keyword ?? ''} productList={filteredProductList} onClick={onSearch} />}
            error={error}
            keyword={keyword}
            onSearch={onSearch}
            onChange={handleChangeSearchInput}
          />
        )}
      </Header>
      <main
        onClick={onBlur}
        css={css`
          position: relative;
          height: 100%;
          padding-top: ${paddingTop};
        `}
      >
        {!filteredProductList.length && filterList.length ? (
          <Empty />
        ) : (
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
        )}
      </main>
    </PageLayout>
  );
}
