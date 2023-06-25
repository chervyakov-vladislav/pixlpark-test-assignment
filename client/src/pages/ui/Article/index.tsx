import styles from './../index.module.scss';
import { FullArticle } from '@/widgets';

export const Article = () => {
  return (
    <section className={styles.container}>
      <FullArticle />
    </section>
  );
};
