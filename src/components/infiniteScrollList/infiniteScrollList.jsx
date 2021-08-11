import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useIntersectionObserver from "hooks/useIntersectionObserver";

InfiniteScrollList.propTypes = {
  hasMore: PropTypes.bool,
  loadMore: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

const InfiniteScrollList = ({ hasMore, loadMore, isLoading, children }) => {
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
};

export default InfiniteScrollList;

const List = styled.ul`
  list-style-type: none;
  width: 500px;
  margin-top: 33px;
`;
