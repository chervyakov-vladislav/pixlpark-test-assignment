import style from './article.module.scss';

import { ArticleMetaData, ArticleDataInterface } from '@/shared';
import { useArticleData } from './use-article';

export const Article: React.FC<{ data: ArticleDataInterface }> = ({ data }) => {
  const { handleArticleClick, formattedDate, score, by, title, id } = useArticleData(data);

  return (
    <article onClick={() => handleArticleClick(id)} className={style.container}>
      <div className={style.metadata}>
        <ArticleMetaData by={by} formattedDate={formattedDate} />
        <div className={style.rating}>Rating: {score} votes</div>
      </div>
      <div className={style.preview}>
        <h2>{title}</h2>
        <span>Read more...</span>
      </div>
    </article>
  );
};
