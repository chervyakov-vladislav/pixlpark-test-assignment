import { ArticleDataInterface } from '@/widgets/NewsList';
import { formatTimestamp } from '@/shared';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const useArticleData = (data: ArticleDataInterface) => {
  const history = useHistory();
  const formattedDate = formatTimestamp(data.time);

  const handleArticleClick = React.useCallback(
    (id: number) => {
      history.push(`/article/${id}`);
    },
    [history]
  );

  return {
    ...data,
    formattedDate,
    handleArticleClick,
  };
};
