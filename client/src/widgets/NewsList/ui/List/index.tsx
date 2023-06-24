import styles from './list.module.scss';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Article, UpdateButton, newsStore } from '@/widgets/NewsList';
import { Spinner } from '../../../../shared';

export const NewsList: React.FC = observer(() => {
  const { articles, getNews, isLoading } = newsStore;

  React.useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <div className={styles.container}>
      <UpdateButton />
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.list}>
          {articles.map((article) => (
            <li key={article.id}>
              <Article data={article} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
