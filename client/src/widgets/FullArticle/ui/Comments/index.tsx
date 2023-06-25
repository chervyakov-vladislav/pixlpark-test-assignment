import { observer } from 'mobx-react-lite';
import styles from './comments.module.scss';

import { useComments } from './use-comments';
import { List } from '@/widgets';
import { Button } from '@/shared';

export const Comments = observer(() => {
  const { commentsCount, handleClick } = useComments();

  return (
    <div className={styles.container}>
      <span>Total comments count: {commentsCount}</span>
      <Button onClick={handleClick}>Update</Button>
      <List />
    </div>
  );
});
