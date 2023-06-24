import styles from './list.module.scss';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Article, UpdateButton } from '@/widgets/NewsList';
import { Spinner } from '@/shared';
import { useList } from './use-list';

export const NewsList: React.FC = observer(() => {
  const { articles, isLoading } = useList();

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
