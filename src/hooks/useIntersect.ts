import { useEffect, useRef } from 'react';

export const useIntersect = ({
  onIntersect,
  options,
}: {
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
  options?: IntersectionObserverInit;
}) => {
  const targetRef = useRef<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(([entry], observer) => {
        onIntersect(entry, observer);
      }, options);
    }

    if (targetRef.current && observer.current) {
      observer.current.disconnect();
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return {
    targetRef,
  };
  //   return new IntersectionObserver(() => {});
};
