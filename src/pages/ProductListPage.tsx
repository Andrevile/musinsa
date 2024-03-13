import { css } from '@emotion/react';
import { ChipButton } from 'components/common/ChipButton';
import { SearchIcon } from 'components/common/icons/SearchIcon';
import PageLayout from 'components/common/PageLayout';
import Header from 'components/header';
import { ProductListContainer } from 'components/product/ProductListContainer';
import { useSearch } from 'hooks/common/useSearch';

export default function ProductListPage() {
  const {
    error,
    filterList,
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
        <ProductListContainer />
      </main>
    </PageLayout>
  );
}
