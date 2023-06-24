import React from 'react';

import style from './base-layout.module.scss';
import { Header } from '@/shared';

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <section className={style.container}>
      <Header />
      {children}
    </section>
  );
};
