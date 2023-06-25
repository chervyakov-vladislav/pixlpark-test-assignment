import { makeAutoObservable, runInAction } from 'mobx';
import { ArticleDataInterface, getArticlesArray } from '@/shared';

class ArticleStore {
  articleData: ArticleDataInterface | null = null;
  isArticleLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setArticleData = (data: ArticleDataInterface | null) => {
    this.articleData = data;
  };

  fetchArticleData = async (id: number) => {
    try {
      this.isArticleLoading = true;
      const reqParams = [id];
      const res: ArticleDataInterface[] = await getArticlesArray(reqParams);

      runInAction(() => {
        this.articleData = res[0];
        this.isArticleLoading = false;
      });
    } catch {
      this.isArticleLoading = false;
    }
  };
}

const articleStore = new ArticleStore();
export { articleStore };
