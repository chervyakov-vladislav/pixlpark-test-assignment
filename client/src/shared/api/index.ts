import { ArticleDataInterface } from '@/widgets';

const SERVER = 'http://localhost:8080/news';

export const getNewsList: () => Promise<ArticleDataInterface[]> = async () => {
  try {
    const result = await fetch(SERVER)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error(`Ошибка в запросе на получение новостей: ${error}`);
      });

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getArticlesArray = async (articlesIds: number[]) => {
  try {
    const result = await fetch(SERVER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ commentIds: articlesIds }),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error(`Ошибка в запросе на получение новостей: ${error}`);
      });

    return result;
  } catch (err) {
    console.log(err);
  }
};
