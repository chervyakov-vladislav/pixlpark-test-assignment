import { useStores } from '@/app/store';

export const useList = () => {
  const {
    comments: { isCommentsLoading, commentsData },
  } = useStores();

  return { isCommentsLoading, commentsData };
};
