import React from 'react';
import styles from './list.module.scss';

import { Article, UpdateButton } from '@/widgets/NewsList';
import { ArticleDataInterface } from '@/widgets/NewsList';

const MOCK_ARTICLE_DATA: ArticleDataInterface = {
  by: 'dhouston',
  descendants: 71,
  id: 8863,
  kids: [
    8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881,
    8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934,
    8876,
  ],
  score: 111,
  time: 1175714200,
  title: 'My YC app: Dropbox - Throw away your USB drive',
  type: 'story',
  url: 'http://www.getdropbox.com/u/2/screencast.html',
};

export const NewsList: React.FC = () => {
  const MOCK_DATA = [
    {
      key: 1,
      elem: <Article data={MOCK_ARTICLE_DATA} />,
    },
    {
      key: 2,
      elem: <Article data={MOCK_ARTICLE_DATA} />,
    },
    {
      key: 3,
      elem: <Article data={MOCK_ARTICLE_DATA} />,
    },
  ];

  return (
    <div className={styles.container}>
      <UpdateButton />
      <ul className={styles.list}>
        {MOCK_DATA.map((article) => (
          <li key={article.key}>{article.elem}</li>
        ))}
      </ul>
    </div>
  );
};
