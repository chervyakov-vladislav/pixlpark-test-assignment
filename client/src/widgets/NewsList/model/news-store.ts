import { makeAutoObservable, runInAction } from 'mobx';
import { ArticleDataInterface } from '@/shared';
import { getNewsList } from '@/shared';

class NewsStore {
  articles: ArticleDataInterface[] = [];
  isLoading = false;
  pollingInterval: NodeJS.Timeout | null = null;

  constructor() {
    makeAutoObservable(this);
    this.startPolling();
  }

  startPolling = () => {
    this.pollingInterval = setInterval(() => this.getNews(), 60_000);
  };

  stopPolling = () => {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  };

  getNews = async () => {
    try {
      this.isLoading = true;
      const res = await getNewsList();

      runInAction(() => {
        this.articles = res;
        this.stopPolling();
        this.startPolling();
        this.isLoading = false;
      });
    } catch {
      this.isLoading = false;
    }
  };
}

const newsStore = new NewsStore();
export { newsStore };
