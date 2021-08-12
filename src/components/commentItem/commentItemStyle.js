import styled from "styled-components";

const ItemBox = styled.li`
  padding: 20px;
  margin-bottom: 12px;
  background: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 20px;
  font-size: 18px;
  line-height: 21px;
  color: #212529;
`;

const ItemRow = styled.div`
  margin: 12px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.span`
  font-weight: bold;
`;

const InlineContent = styled.span`
  margin-left: 12px;
`;

const BoxContent = styled.p`
  margin-top: 2px;
`;

export default {
  ItemBox,
  ItemRow,
  Title,
  InlineContent,
  BoxContent,
};
