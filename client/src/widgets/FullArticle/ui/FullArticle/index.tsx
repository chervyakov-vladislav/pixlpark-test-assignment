import { observer } from 'mobx-react-lite';
import style from './full-article.module.scss';
import { useFullArticle } from './use-full-article';
import { ArticleMetaData, Spinner, Button } from '@/shared';
import { Comments } from '@/widgets';

export const FullArticle = observer(() => {
  const { by, isLoading, formattedDate, title, url, handleBack } = useFullArticle();

  return (
    <>
      <Button as='a' onClick={handleBack}>
        Go back
      </Button>
      {isLoading ? (
        <Spinner />
      ) : (
        <article className={style.container}>
          <div className={style.metadata}>
            <ArticleMetaData by={by} formattedDate={formattedDate} />
          </div>
          <div className={style.preview}>
            <h2>{title}</h2>
            <span>Link: {url}</span>
          </div>
          <Comments />
        </article>
      )}
    </>
  );
});
