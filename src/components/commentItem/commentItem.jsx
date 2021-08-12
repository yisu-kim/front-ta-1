import React from "react";
import PropTypes from "prop-types";
import style from "./commentItemStyle";

CommentItem.propTypes = {
  comment: PropTypes.object,
};

export default function CommentItem({ comment }) {
  const { id, email, body } = comment;

  return (
    <ItemBox>
      <ItemRow>
        <Title>Comment Id</Title> <InlineContent>{id}</InlineContent>
      </ItemRow>
      <ItemRow>
        <Title>Email</Title> <InlineContent>{email}</InlineContent>
      </ItemRow>
      <ItemRow>
        <Title>Comment</Title>
        <BoxContent>{body}</BoxContent>
      </ItemRow>
    </ItemBox>
  );
}

const { ItemBox, ItemRow, Title, InlineContent, BoxContent } = style;
