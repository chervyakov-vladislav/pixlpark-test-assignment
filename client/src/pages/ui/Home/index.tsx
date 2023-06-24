import styles from './../index.module.scss';

import { NewsList } from '@/widgets/NewsList';

export const Home: React.FC = () => {
  return (
    <section className={styles.container}>
      <NewsList />
    </section>
  );
};
