import { useStores } from '@/app/store';
import { CommentInterface } from '@/widgets';
import { formatTimestamp } from '@/shared';

export const useOneComment = (data: CommentInterface) => {
  const {
    comments: {},
  } = useStores();

  const formattedDate = formatTimestamp(data.time);
  const htmlCode = data.text;
  const childrens = data.kids ?? [];

  return {
    ...data,
    formattedDate,
    htmlCode,
    childrens,
  };
};
