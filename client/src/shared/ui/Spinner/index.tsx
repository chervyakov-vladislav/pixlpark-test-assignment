import styles from './spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
