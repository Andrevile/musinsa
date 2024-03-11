import { useState } from 'react';

export const useSearch = () => {
  //   const [keyword, setKeyword] = useState<string>('');
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

  return {
    searchModeOnOff,
    toggleSearchMode,
    isIncludeKeyword,
  };
};
