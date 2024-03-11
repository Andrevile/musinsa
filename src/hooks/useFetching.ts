import { useEffect, useState } from 'react';

export const useFetching = <T>(
  queryKey: string | string[],
  callback: () => Promise<T>,
  options?: { onSuccess?: (data: T) => void },
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();

  const deps = Array.isArray(queryKey) ? queryKey : [queryKey];

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
    }

    callback()
      .then((data) => {
        setData(data);
        setIsLoading(false);
        return data;
      })
      .then((data) => {
        options?.onSuccess?.(data);
      });
  }, deps);

  return {
    isLoading,
    data,
  };
};
