import { ProductType } from 'types/product';

const BASE_URL = 'https://static.msscdn.net/musinsaUI';

const http = {
  get: async (url: string): Promise<{ data: { list: ProductType[] } }> => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('상품목록을 불러오는데 실패하였습니다.');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('상품목록을 불러오는데 실패하였습니다.', error);
      throw error;
    }
  },
};

export const getProductList = async ({
  params,
}: {
  params: string | number;
}): Promise<{ data: { list: ProductType[] } }> => {
  const path = `homework/data/goods${params}.json`;
  const url = `${BASE_URL}/${path}`;

  //로딩 상태를 위해 1초 지연
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(http.get(url));
    }, 1000);
  });
};
