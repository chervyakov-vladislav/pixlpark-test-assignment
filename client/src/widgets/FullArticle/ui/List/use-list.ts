import { useStores } from '@/app/store';

export const useList = () => {
  const {
    comments: { isCommentsLoading },
  } = useStores();

  return { isCommentsLoading };
};
