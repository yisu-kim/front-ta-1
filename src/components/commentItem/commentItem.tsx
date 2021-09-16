import React from 'react';
import { CommentResponse } from 'services/comment';
import style from './commentItemStyle';

interface CommentItemProps {
  mesureRef?: (node: HTMLElement | null) => void;
  comment: CommentResponse;
}

const CommentItem: React.FC<CommentItemProps> = ({ mesureRef, comment }) => {
  const { id, email, body } = comment;

  return (
    <ItemBox ref={mesureRef}>
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
};

export default CommentItem;

const { ItemBox, ItemRow, Title, InlineContent, BoxContent } = style;
