import React from 'react';
import { useStores } from '@/app/store';

export const useComments = () => {
  const {
    comments: { articleData, updateArticleData, fetchComments },
  } = useStores();

  const handleClick = () => {
    updateArticleData();
  };

  React.useEffect(() => {
    if (articleData && articleData.kids && articleData.kids.length > 0) {
      fetchComments(articleData.kids);
    }
  }, []);

  let commentsCount = 0;
  if (articleData) {
    commentsCount = articleData.descendants;
  }

  return { commentsCount, handleClick };
};
