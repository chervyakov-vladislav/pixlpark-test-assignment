import styles from './list.module.scss';
import { observer } from 'mobx-react-lite';

import { CommentInterface, OneComment } from '@/widgets';
import React from 'react';

interface IProps {
  data: CommentInterface[];
}

export const ChildList: React.FC<IProps> = observer(({ data }) => {
  if (!data.length) return null;

  return (
    <ul className={styles.list}>
      {data.map((comment) => {
        return comment.text ? (
          <li key={comment.id}>
            <OneComment {...comment} />
          </li>
        ) : null;
      })}
    </ul>
  );
});
