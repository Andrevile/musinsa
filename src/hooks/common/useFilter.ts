import { useFilterWithSearchContext } from 'components/context/FilterWithSearchProvider';

export const useFilter = () => {
  const { filterList, handleFilterList } = useFilterWithSearchContext();
  const filterSet = new Set(filterList);

  const toggleFilter = (filter: string) => {
    const isExist = filterSet.has(filter);

    if (!isExist) {
      handleFilterList([...filterList, filter]);
      return;
    }

    filterSet.delete(filter);
    handleFilterList(Array.from(filterSet));
  };

  const resetFilter = () => {
    handleFilterList([]);
  };

  return {
    filterList,
    toggleFilter,
    resetFilter,
  };
};
