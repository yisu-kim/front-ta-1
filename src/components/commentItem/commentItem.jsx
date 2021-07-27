import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ItemBox = styled.li`
  padding: 20px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 21px;
  color: #212529;
`;

const ItemRow = styled.div`
  margin: 12px 0;
  &:first-child {
    margin: 0;
  }
  &:last-child {
    margin: 0;
  }
`;

const Title = styled.span`
  font-weight: bold;
`;

const InlineContent = styled.span`
  margin-left: 12px;
`;

const BoxContent = styled.p`
  margin: 0;
  margin-top: 2px;
`;

function CommentItem({ comment }) {
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

export default CommentItem;

CommentItem.propTypes = {
  comment: PropTypes.object,
};
