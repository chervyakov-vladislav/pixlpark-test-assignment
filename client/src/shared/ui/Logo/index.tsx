import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link to='/' className={styles.container}>
      <svg viewBox='0 0 100 100' className={styles.image} xmlns='http://www.w3.org/2000/svg'>
        <rect x='0' y='0' width='100' height='100' fill='rgb(255, 102, 0)'></rect>
        <path
          d='M 50 77 L 50 50 '
          fill='none'
          stroke='rgb(255, 255, 255)'
          strokeWidth='8.78662150719729'
          strokeLinecap='butt'
        ></path>
        <path
          d='M 94.93056731583404 35.622745513916016 L 71.2454833984375 71.2454833984375 '
          fill='none'
          stroke='rgb(255, 255, 255)'
          strokeWidth='8.78662150719729'
          strokeLinecap='butt'
          transform='matrix(1 0 0 1 -21.2455 -21.2455)'
        ></path>
        <path
          d='M -78.93056731583404 36.17028045654297 L -55.67118835449219 71.79300689697266 '
          fill='none'
          stroke='rgb(255, 255, 255)'
          strokeWidth='8.78662150719729'
          strokeLinecap='butt'
          transform='matrix(1 0 0 1 105.396 -21.7213)'
        ></path>
        <rect
          transform=''
          width='100'
          height='23.742591024555463'
          strokeWidth='1'
          stroke='none'
          fill='#FF6600'
          strokeOpacity='1'
          fillOpacity='1'
          strokeLinecap='butt'
          strokeLinejoin='miter'
        ></rect>
      </svg>
      <h1 className={styles.title}>Hacker News</h1>
    </Link>
  );
};
