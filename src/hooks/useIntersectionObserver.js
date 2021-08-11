import { useCallback, useEffect, useState } from "react";

const useIntersectionObserver = (
  ref,
  { root = null, rootMargin = "0px 0px 0px 0px", threshold = 0 }
) => {
  const [entry, setEntry] = useState();

  const updateEntry = useCallback(([entry]) => {
    setEntry(entry);
  }, []);

  useEffect(() => {
    const target = ref.current;

    if (!target) {
      return;
    }

    const options = { root, rootMargin, threshold };
    const observer = new IntersectionObserver(updateEntry, options);

    observer.observe(target);

    return () => observer.disconnect();
  }, [ref, root, rootMargin, threshold, updateEntry]);

  return entry;
};

export default useIntersectionObserver;
