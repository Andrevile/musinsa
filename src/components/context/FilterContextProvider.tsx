import { createContext, ReactNode, useContext, useState } from 'react';

interface FilterContextValue {
  searchModeOnOff?: boolean;
  toggleSearchMode?: () => void;
}

const FilterContext = createContext<FilterContextValue>({
  searchModeOnOff: false,
});

export const useFilterContext = () => useContext(FilterContext);

export const FilterContextProvider = ({ children }: { children?: ReactNode }) => {
  const [searchModeOnOff, setIsSearchModeOnOff] = useState<boolean>(false);

  const toggleSearchMode = () => {
    setIsSearchModeOnOff(!searchModeOnOff);
  };

  return <FilterContext.Provider value={{ searchModeOnOff, toggleSearchMode }}>{children}</FilterContext.Provider>;
};
