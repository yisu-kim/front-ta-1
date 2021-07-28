import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/*
 * Please modify this component to complete assignment.
 * You can modify all the files in that package if you need.
 */
const InfiniteScrollList = ({ hasMore, loadMore, children }) => {
  const endRef = useRef();

  useEffect(() => {
    if (hasMore) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      observer.observe(endRef.current);
    }
  }, [hasMore, loadMore]);

  return (
    <List>
      {children}
      <ListEnd ref={endRef}></ListEnd>
    </List>
  );
};

export default InfiniteScrollList;

InfiniteScrollList.propTypes = {
  hasMore: PropTypes.bool,
  loadMore: PropTypes.func,
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

const ListEnd = styled.li`
  height: 300px;
`;
