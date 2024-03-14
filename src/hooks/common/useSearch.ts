import { useFilterWithSearchContext } from 'components/context/FilterWithSearchProvider';
import { useEffect, useRef, useState } from 'react';

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
    const keyword = e.target.value;
    setKeyword(keyword.trim());
  };

  const onSearch = () => {
    if (keyword && keyword.length) {
      const isExistSearchKeyWord = filterList.includes(keyword);
      if (isExistSearchKeyWord) {
        setIsError(true);
        return;
      }
      handleFilterList([...filterList, keyword]);
      setIsError(false);
      setKeyword(null);
    }
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
    onSearch,
    onBlur,
  };
};
