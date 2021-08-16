import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { API } from 'utils/constants';
import HayanMind from 'service/hayanmind';
import CommentList from 'components/commentList';
import style from './AppStyle';

App.propTypes = {
  hayanmind: PropTypes.instanceOf(HayanMind),
};

export default function App({ hayanmind }) {
  const [page, setPage] = useState(API.startPage);
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: newComments } = await hayanmind.comments(page);
      setComments((prevComments) => [...prevComments, ...newComments]);
      setHasMore(newComments.length > 0);
      setIsLoading(false);
    })();
  }, [hayanmind, page]);

  const loadMore = useCallback(() => {
    setPage((page) => page + 1);
    setIsLoading(true);
  }, []);

  return (
    <Container>
      {comments.length > 0 && (
        <CommentList
          hasMore={hasMore}
          loadMore={loadMore}
          isLoading={isLoading}
          comments={comments}
        />
      )}
    </Container>
  );
}

const { Container } = style;
