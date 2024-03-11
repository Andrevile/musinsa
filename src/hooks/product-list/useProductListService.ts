import { useEffect, useState } from 'react';
import { FilterOptionType } from 'types/filter';
import { ProductType } from 'types/product';
import { getProductList } from 'utils/apis';

import { useFetching } from '../common/useFetching';
import { useIntersect } from '../common/useIntersect';

interface Params {
  filterList: FilterOptionType[];
}

export const useProductListService = ({ filterList }: Params) => {
  const [page, setPage] = useState<number>(0);
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [filteredProductList, setFilteredProductList] = useState<ProductType[]>([]);
  const hasNextPage = page < 3; //주어진 데이터의 구조 한계상 다음페이지 여부를 하드코딩

  const { isLoading } = useFetching(
    ['PRODUCT_LIST', `${page}`],
    async () => {
      const result = await getProductList({ params: page });
      return result.data.list;
    },
    {
      onSuccess: (data) => {
        if (data) {
          setProductList([...productList, ...data]);
        }
      },
    },
  );

  const { targetRef } = useIntersect({
    onIntersect: (entry) => {
      if (entry.isIntersecting && hasNextPage && !isLoading) {
        setPage(page + 1);
      }
    },
  });

  const filterProductList = (productList: ProductType[]) => {
    let filteredProductList = productList;
    const filterSet = new Set(filterList);
    if (!filterSet.has('includeSoldOut')) {
      filteredProductList = filteredProductList.filter((product) => !product.isSoldOut);
    }

    if (filterSet.has('onlyExclusive')) {
      filteredProductList = filteredProductList.filter((product) => product.isExclusive);
    }

    if (filterSet.has('onlySale')) {
      filteredProductList = filteredProductList.filter((product) => product.isSale);
    }

    return filteredProductList;
  };

  useEffect(() => {
    const filteredProductList = filterProductList(productList);
    setFilteredProductList(filteredProductList);
  }, [productList, filterList]);

  return {
    isLoading,
    targetRef,
    filteredProductList,
  };
};
