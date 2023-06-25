import style from './full-article.module.scss';
import { useFullArticle } from './use-full-article';

export const FullArticle = () => {
  const { id } = useFullArticle();

  return (
    <article className={style.container}>
      <div className={style.metadata}>
        <div className={style.info}>
          <div className={style.author}>adasd</div>
          <div className={style.date}>asdasdasda</div>
        </div>
      </div>
      <div className={style.preview}>
        <h2>{id}</h2>
        <span>link</span>
      </div>
    </article>
  );
};
