import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/*
 * Please modify this component to complete assignment.
 * You can modify all the files in that package if you need.
 */
const InfiniteScrollList = ({ hasMore, loadMore, isLoading, children }) => {
  const endRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "0px 0px 400px" }
    );
    const target = endRef.current;

    if (hasMore) {
      observer.observe(target);
    }

    return function cleanup() {
      observer.unobserve(target);
    };
  }, [hasMore, loadMore]);

  return (
    <List>
      {children}
      <li ref={endRef}>{isLoading && <p>Loading...</p>}</li>
    </List>
  );
};

export default InfiniteScrollList;

InfiniteScrollList.propTypes = {
  hasMore: PropTypes.bool,
  loadMore: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 500px;
  margin-top: 33px;
`;
