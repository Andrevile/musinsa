import { useEffect, useRef, useState } from 'react';

export const useSearch = () => {
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

  const onBlur = () => {
    setIsSearchModeOnOff(false);
  };

  const onSearch = () => {
    setKeyword(null);
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
    error,
    keyword,
    inputRef,
    searchModeOnOff,
    toggleSearchMode,
    isIncludeKeyword,
    handleChangeSearchInput,
    setIsError,
    onBlur,
    onSearch,
  };
};
