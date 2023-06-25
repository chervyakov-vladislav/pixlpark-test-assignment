import styles from './one-comments.module.scss';
import { CommentInterface } from '@/widgets';
import { useOneComment } from './use-one-comment';
import { Button } from '@/shared';

export const OneComment: React.FC<CommentInterface> = (data) => {
  const { formattedDate, by, htmlCode, childrens } = useOneComment(data);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.author}>{by}</div>
        <div className={styles.date}>{formattedDate}</div>
      </div>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
      {childrens.length ? (
        <Button className={styles.load}>Show replies: {childrens.length.toString()}</Button>
      ) : null}
    </div>
  );
};
