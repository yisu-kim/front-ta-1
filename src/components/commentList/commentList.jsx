import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useOnScreen from 'hooks/useOnScreen';
import CommentItem from 'components/commentItem';
import style from './commentListStyle';

CommentList.propTypes = {
  hasMore: PropTypes.bool,
  loadMore: PropTypes.func,
  isLoading: PropTypes.bool,
  comments: PropTypes.array,
};

export default function CommentList({
  hasMore,
  loadMore,
  isLoading,
  comments,
}) {
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
      observer.disconnect();
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
}

const { List } = style;
