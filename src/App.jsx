import React, { useCallback, useEffect, useState } from "react";
import InfiniteScrollList from "./components/infiniteScrollList";
import styled from "styled-components";
import PropTypes from "prop-types";
import HayanMind from "./service/hayanmind";
import CommentItem from "./components/commentItem/commentItem";

function App({ hayanmind }) {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    hayanmind.comments(page).then((comments) => {
      setComments((prev) => [...prev, ...comments]);
      setHasMore(true);
    });
  }, [hayanmind, page]);

  const loadMore = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  return (
    <Container>
      <InfiniteScrollList hasMore={hasMore} loadMore={loadMore}>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </InfiniteScrollList>
    </Container>
  );
}

export default App;

App.propTypes = {
  hayanmind: PropTypes.instanceOf(HayanMind),
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
