import { useEffect } from 'react';
import { FilterOptionType } from 'types/filter';

interface Params {
  filterList: FilterOptionType[];
  setFilterList: (list: FilterOptionType[]) => void;
}

export const useFilter = ({ filterList, setFilterList }: Params) => {
  const filterSet = new Set(filterList);

  const toggleFilter = (filter: FilterOptionType) => {
    const isExist = filterSet.has(filter);

    if (!isExist) {
      setFilterList([...filterList, filter]);
      return;
    }

    filterSet.delete(filter);
    setFilterList(Array.from(filterSet));
  };

  const resetFilter = () => {
    setFilterList([]);
  };

  return {
    filterList,
    toggleFilter,
    resetFilter,
  };
};
