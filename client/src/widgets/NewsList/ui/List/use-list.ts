import { useStores } from '@/app/store';
import React from 'react';

export const useList = () => {
  const {
    news: { articles, getNews, isLoading },
  } = useStores();

  React.useEffect(() => {
    if (articles.length === 0) {
      getNews();
    }
  }, [getNews]);

  return {
    articles,
    isLoading,
  };
};
