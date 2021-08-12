import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import style from "./infiniteScrollListStyle";

InfiniteScrollList.propTypes = {
  hasMore: PropTypes.bool,
  loadMore: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default function InfiniteScrollList({
  hasMore,
  loadMore,
  isLoading,
  children,
}) {
  const endRef = useRef();
  const io = useIntersectionObserver(endRef, {
    rootMargin: "0px 0px 400px",
  });

  useEffect(() => {
    if (io?.isIntersecting && hasMore) {
      loadMore();
    }
  }, [io, hasMore, loadMore]);

  return (
    <List>
      {children}
      <li ref={endRef}>{isLoading && <p>Loading...</p>}</li>
    </List>
  );
}

const { List } = style;
