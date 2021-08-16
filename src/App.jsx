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
