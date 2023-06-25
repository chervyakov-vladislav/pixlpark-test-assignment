import { useStores } from '@/app/store';
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ArticleDataInterface, formatTimestamp } from '@/shared';

export const useFullArticle = () => {
  const { id: idFromRouter } = useParams<{ id: string }>();
  const {
    articlePage: { articleData, fetchArticleData, isArticleLoading },
    comments: { setArticleDataForComments, clearCommentsData },
  } = useStores();

  React.useEffect(() => {
    return () => clearCommentsData();
  }, [clearCommentsData]);

  const data = articleData as ArticleDataInterface;

  React.useLayoutEffect(() => {
    if (!data) {
      fetchArticleData(Number(idFromRouter));
    }
  }, [idFromRouter]);

  let formattedDate = '';
  if (data) {
    setArticleDataForComments(data);
    formattedDate = formatTimestamp(data.time);
  }

  const history = useHistory();
  const handleBack = React.useCallback(() => {
    history.push('/');
  }, [history]);

  return {
    ...data,
    formattedDate,
    handleBack,
    isLoading: isArticleLoading,
  };
};
