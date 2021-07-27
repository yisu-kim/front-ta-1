import React from "react";
import CommentItem from "../commentItem/commentItem";
import styled from "styled-components";
import PropTypes from "prop-types";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 500px;
  margin-top: 33px;
`;

/*
 * Please modify this component to complete assignment.
 * You can modify all the files in that package if you need.
 */
const InfiniteScrollList = ({ comments }) => {
  return (
    <List>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </List>
  );
};

export default InfiniteScrollList;

InfiniteScrollList.propTypes = {
  comments: PropTypes.array,
};
