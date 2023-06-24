import { makeAutoObservable, runInAction } from 'mobx';
import { ArticleDataInterface } from './types';
import { getNewsList } from '@/shared';

class NewsStore {
  articles: ArticleDataInterface[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getNews = async () => {
    try {
      this.isLoading = true;
      const res = await getNewsList();

      runInAction(() => {
        this.articles = res;
        this.isLoading = false;
      });
    } catch {
      this.isLoading = false;
    }
  };
}

const newsStore = new NewsStore();
export { newsStore };
