import styles from './update-button.module.scss';
import { useButton } from './use-button';

export const UpdateButton = () => {
  const { handleClick } = useButton();

  return (
    <button className={styles.button} onClick={handleClick}>
      Update
    </button>
  );
};
