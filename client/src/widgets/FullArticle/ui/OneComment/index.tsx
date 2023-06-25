import styles from './one-comments.module.scss';
import { ChildList, CommentInterface } from '@/widgets';
import { useOneComment } from './use-one-comment';
import { Button, Spinner } from '@/shared';

export const OneComment: React.FC<CommentInterface> = (data) => {
  const {
    formattedDate,
    by,
    htmlCode,
    children,
    handleLoadChildren,
    childrenLoading,
    childernData,
  } = useOneComment(data);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.author}>{by}</div>
        <div className={styles.date}>{formattedDate}</div>
      </div>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
      {children.length ? (
        <div>
          <Button className={styles.load} onClick={() => handleLoadChildren(children)}>
            Show replies: {children.length.toString()}
          </Button>
          {childrenLoading ? <Spinner /> : <ChildList data={childernData} />}
        </div>
      ) : null}
    </div>
  );
};
