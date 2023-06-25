import { observer } from 'mobx-react-lite';
import style from './full-article.module.scss';
import { useFullArticle } from './use-full-article';
import { ArticleMetaData, Spinner, Button } from '@/shared';
import { Comments } from '@/widgets';

export const FullArticle = observer(() => {
  const { by, isLoading, formattedDate, title, url, handleBack } = useFullArticle();

  if (!title && !isLoading)
    return (
      <article className={style['container-empty']}>
        <Button as='a' onClick={handleBack}>
          Go back
        </Button>
        <span>{`Article doesn\'t exist`}</span>
      </article>
    );

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
            {url ? (
              <span>
                Link:
                <Button as='a' target='_blank' href={url} className={style.link}>
                  {url}
                </Button>
              </span>
            ) : null}
          </div>
          <Comments />
        </article>
      )}
    </>
  );
});
