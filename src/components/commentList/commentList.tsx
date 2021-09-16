import React, { useEffect } from 'react';
import useOnScreen from 'hooks/useOnScreen';
import { CommentResponse } from 'services/comment';
import CommentItem from 'components/commentItem';
import style from './commentListStyle';

interface CommentListProps {
  hasMore: boolean;
  loadMore: () => void;
  isLoading: boolean;
  comments: CommentResponse[];
}

const CommentList: React.FC<CommentListProps> = ({
  hasMore,
  loadMore,
  isLoading,
  comments,
}) => {
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
      observer!.disconnect();
    }
  }, [isIntersecting, hasMore, loadMore]);

  return (
    <List>
      {comments.map((comment, index) => {
        if (index === comments.length - 1) {
          return (
            <CommentItem
              mesureRef={measureRef}
              key={comment.id}
              comment={comment}
            />
          );
        }
        return <CommentItem key={comment.id} comment={comment} />;
      })}
      {isLoading && <li>Loading...</li>}
    </List>
  );
};

export default CommentList;

const { List } = style;
