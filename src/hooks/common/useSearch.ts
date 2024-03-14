import { useFilterWithSearchContext } from 'components/context/FilterWithSearchProvider';
import { useEffect, useRef, useState } from 'react';
import { ProductType } from 'types/product';

export const useSearch = () => {
  const { filterList, handleFilterList } = useFilterWithSearchContext();
  const [error, setIsError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [keyword, setKeyword] = useState<string | null>(null);
  const [searchModeOnOff, setIsSearchModeOnOff] = useState<boolean>(false);

  const toggleSearchMode = () => {
    setIsSearchModeOnOff(!searchModeOnOff);
  };

  const isIncludeKeyword = (queryList: string[]) => {
    const filteredQueryList = queryList.filter((query) => {
      if (query !== 'onlySale' && query !== 'onlyExclusive' && query !== 'includeSoldOut') {
        return true;
      }
      return false;
    });

    return !!filteredQueryList.length;
  };

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onSearch = () => {
    if (keyword && keyword.length) {
      const isExistSearchKeyWord = filterList.includes(keyword);
      if (isExistSearchKeyWord) {
        setIsError(true);
        return;
      }
      handleFilterList([...filterList, keyword.trim()]);
      setIsError(false);
      setKeyword(null);
    }
  };

  const onClickAutoCompleteItem = (item: ProductType) => {
    const productName = item.goodsName;
    const isExistSearchKeyWord = filterList.includes(productName);
    if (isExistSearchKeyWord) {
      setIsError(true);
      return;
    }
    handleFilterList([...filterList, productName.trim()]);
    setIsError(false);
    setKeyword(null);
  };

  const onBlur = () => {
    setIsSearchModeOnOff(false);
  };

  useEffect(() => {
    if (searchModeOnOff) {
      inputRef.current?.focus();
    } else {
      setIsError(false);
      setKeyword(null);
    }
  }, [searchModeOnOff]);

  return {
    filterList,
    error,
    keyword,
    inputRef,
    searchModeOnOff,
    toggleSearchMode,
    isIncludeKeyword,
    handleChangeSearchInput,
    onClickAutoCompleteItem,
    onSearch,
    onBlur,
  };
};
