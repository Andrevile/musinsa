interface Params {
  filterList: string[];
  setFilterList: (list: string[]) => void;
}

export const useFilter = ({ filterList, setFilterList }: Params) => {
  const filterSet = new Set(filterList);

  const toggleFilter = (filter: string) => {
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
