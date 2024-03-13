import { createContext, ReactNode, useContext, useState } from 'react';

interface FilterWithSearchContextValue {
  filterList: string[];
  handleFilterList: (filterList: string[]) => void;
}

const FilterWithSearchContext = createContext<FilterWithSearchContextValue>({
  filterList: [],
  handleFilterList: () => {},
});

export const useFilterWithSearchContext = () => useContext(FilterWithSearchContext);

export const FilterWithSearchContextProvider = ({ children }: { children?: ReactNode }) => {
  const [filterList, setFilterList] = useState<string[]>([]);

  const handleFilterList = (filterList: string[]) => {
    setFilterList(filterList);
  };

  return (
    <FilterWithSearchContext.Provider value={{ filterList, handleFilterList }}>
      {children}
    </FilterWithSearchContext.Provider>
  );
};
