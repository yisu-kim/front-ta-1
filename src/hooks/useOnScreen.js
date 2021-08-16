import { useCallback, useState } from 'react';

const useOnScreen = ({
  root = null,
  rootMargin = '0px',
  threshold = 0,
} = {}) => {
  const [observer, setOserver] = useState();
  const [isIntersecting, setIntersecting] = useState(false);

  const measureRef = useCallback(
    (node) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        { root, rootMargin, threshold }
      );

      if (node) {
        observer.observe(node);
        setOserver(observer);
      }
    },
    [root, rootMargin, threshold]
  );

  return { measureRef, isIntersecting, observer };
};

export default useOnScreen;
