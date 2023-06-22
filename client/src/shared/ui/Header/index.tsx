import styles from './Header.module.scss';

import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
