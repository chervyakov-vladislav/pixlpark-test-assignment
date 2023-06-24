import { ArticleDataInterface } from '@/widgets/NewsList';
import { formatTimestamp } from '@/shared';
import React from 'react';

export const useArticleData = (data: ArticleDataInterface) => {
  const formattedDate = formatTimestamp(data.time);

  const handleArticleClick = React.useCallback(() => {
    console.log(data.id);
  }, [data.id]);

  return {
    ...data,
    formattedDate,
    handleArticleClick,
  };
};
