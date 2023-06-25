import React from 'react';
import style from './meta-data.module.scss';

interface IProps {
  by: string;
  formattedDate: string;
}

export const ArticleMetaData: React.FC<IProps> = ({ by, formattedDate }) => {
  return (
    <div className={style.info}>
      <div className={style.author}>{by}</div>
      <div className={style.date}>{formattedDate}</div>
    </div>
  );
};
