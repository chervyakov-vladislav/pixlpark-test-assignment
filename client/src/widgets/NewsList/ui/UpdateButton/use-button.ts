import { useStores } from '@/app/store';

export const useButton = () => {
  const {
    news: { getNews },
  } = useStores();

  const handleClick = () => {
    getNews();
  };

  return {
    handleClick,
  };
};
