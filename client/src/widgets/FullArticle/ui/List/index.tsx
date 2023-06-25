import styles from './list.module.scss';
import { observer } from 'mobx-react-lite';

import { useList } from './use-list';
import { Spinner } from '@/shared';
import { OneComment } from '@/widgets';

export const List = observer(() => {
  const { isCommentsLoading, commentsData } = useList();

  return isCommentsLoading ? (
    <Spinner />
  ) : (
    <ul className={styles.list}>
      {commentsData.map((comment) => {
        return comment.text ? (
          <li key={comment.id}>
            <OneComment {...comment} />
          </li>
        ) : null;
      })}
    </ul>
  );
});
