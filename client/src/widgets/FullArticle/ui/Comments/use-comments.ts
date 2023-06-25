import React from 'react';
import { useStores } from '@/app/store';

export const useComments = () => {
  const {
    comments: { articleData, updateArticleData, commentsData, fetchComments },
  } = useStores();

  const handleClick = () => {
    updateArticleData();
  };

  React.useEffect(() => {
    if (!commentsData.length && articleData) {
      fetchComments(articleData.kids);
    }
  }, []);

  let commentsCount = 0;
  if (articleData) {
    commentsCount = articleData.descendants;
  }

  return { commentsCount, handleClick };
};
