import { useStores } from '@/app/store';
import { useParams } from 'react-router-dom';

export const useFullArticle = () => {
  const { id } = useParams<{ id: string }>();
  const {
    news: { articles },
  } = useStores();

  return {
    id,
  };
};
