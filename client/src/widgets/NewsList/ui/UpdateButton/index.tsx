import styles from './update-button.module.scss';

export const UpdateButton = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Update
    </button>
  );
};
