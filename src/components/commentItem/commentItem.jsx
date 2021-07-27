/* eslint-disable react/prop-types */

import React from "react";

function CommentItem({ comment }) {
  const { id, email, body } = comment;

  return (
    <li>
      <p>Comment Id {id}</p>
      <p>Email {email}</p>
      <p>Comment {body}</p>
    </li>
  );
}

export default CommentItem;
