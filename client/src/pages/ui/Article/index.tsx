import styles from './../index.module.scss';
import { useParams } from 'react-router-dom';

export const Article = () => {
  const { id } = useParams<{ id: string }>();

  return <section className={styles.container}>Article - {id}</section>;
};
