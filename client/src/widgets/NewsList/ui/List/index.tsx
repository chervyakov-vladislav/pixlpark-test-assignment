import styles from './list.module.scss';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { Article } from '@/widgets/NewsList';
import { Spinner, Button } from '@/shared';
import { useList } from './use-list';

export const NewsList: React.FC = observer(() => {
  const { articles, isLoading, handleClick } = useList();

  return (
    <div className={styles.container}>
      <Button onClick={handleClick}>Update</Button>
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
