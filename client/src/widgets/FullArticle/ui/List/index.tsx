import { observer } from 'mobx-react-lite';
import { useList } from './use-list';
import { Spinner } from '@/shared';

export const List = observer(() => {
  const { isCommentsLoading } = useList();

  return isCommentsLoading ? <Spinner /> : <div>List</div>;
});
