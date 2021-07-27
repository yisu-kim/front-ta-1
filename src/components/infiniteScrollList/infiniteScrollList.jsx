/* eslint-disable react/prop-types */

import React from "react";
import CommentItem from "../commentItem/commentItem";

/*
 * Please modify this component to complete assignment.
 * You can modify all the files in that package if you need.
 */
const InfiniteScrollList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default InfiniteScrollList;
