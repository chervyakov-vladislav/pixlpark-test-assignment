import React from 'react';
import { useHistory } from 'react-router-dom';

import { useStores } from '@/app/store';
import { formatTimestamp, ArticleDataInterface } from '@/shared';

export const useArticleData = (data: ArticleDataInterface) => {
  const {
    news: { articles },
    articlePage: { setArticleData },
  } = useStores();
  const history = useHistory();
  const formattedDate = formatTimestamp(data.time);

  const findArticle = (id: number) => {
    return articles.find((article) => article.id === id);
  };

  const handleArticleClick = React.useCallback(
    (id: number) => {
      const value = findArticle(id);
      const articleData = value ? value : null;
      setArticleData(articleData);
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
