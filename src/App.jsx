import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { START_PAGE } from "utils/constants";
import HayanMind from "service/hayanmind";
import InfiniteScrollList from "components/infiniteScrollList";
import CommentItem from "components/commentItem/commentItem";
import style from "./AppStyle";

App.propTypes = {
  hayanmind: PropTypes.instanceOf(HayanMind),
};

export default function App({ hayanmind }) {
  const [page, setPage] = useState(START_PAGE);
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    hayanmind.comments(page).then((comments) => {
      setComments((prev) => [...prev, ...comments]);
      setIsLoading(false);

      if (comments.length > 0) {
        setHasMore(true);
        setIsLoading(true);
      } else {
        setHasMore(false);
      }
    });
  }, [hayanmind, page]);

  const loadMore = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  return (
    <Container>
      <InfiniteScrollList
        hasMore={hasMore}
        loadMore={loadMore}
        isLoading={isLoading}
      >
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </InfiniteScrollList>
    </Container>
  );
}

const { Container } = style;
