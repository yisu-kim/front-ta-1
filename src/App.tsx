import React, { useCallback, useEffect, useState } from 'react';
import { API } from 'utils/constants';
import CommentService, { CommentResponse } from 'services/comment';
import CommentList from 'components/commentList';
import style from './AppStyle';

interface AppProps {
  commentService: CommentService;
}

const App: React.FC<AppProps> = ({ commentService }) => {
  const [page, setPage] = useState<number>(API.startPage);
  const [comments, setComments] = useState<CommentResponse[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: newComments } = await commentService.getAll(page);
      setComments((prevComments) => [...prevComments, ...newComments]);
      setHasMore(newComments.length > 0);
      setIsLoading(false);
    })();
  }, [commentService, page]);

  const loadMore = useCallback(() => {
    setPage((page) => page + 1);
    setIsLoading(true);
  }, []);

  return (
    <Container>
      <CommentList
        hasMore={hasMore}
        loadMore={loadMore}
        isLoading={isLoading}
        comments={comments}
      />
    </Container>
  );
};

export default App;

const { Container } = style;
