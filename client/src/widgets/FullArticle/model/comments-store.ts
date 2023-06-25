import { action, makeObservable, observable, runInAction } from 'mobx';
import { ArticleDataInterface, getArticlesArray } from '@/shared';
import { CommentInterface } from './types';

class CommentsStore {
  articleData: ArticleDataInterface | null = null;
  isCommentsLoading = false;
  commentsData: CommentInterface[] = [];

  constructor() {
    makeObservable(this, {
      articleData: observable,
      isCommentsLoading: observable,
      commentsData: observable,
      setArticleDataForComments: action,
      clearCommentsData: action,
      updateArticleData: action,
      fetchComments: action,
    });
  }

  setArticleDataForComments = (data: ArticleDataInterface) => {
    this.articleData = data;
  };

  clearCommentsData = () => {
    this.commentsData = [];
  };

  updateArticleData = async () => {
    try {
      this.isCommentsLoading = true;
      const data = this.articleData as ArticleDataInterface;

      const reqParams = [data.id];
      const resArticle: ArticleDataInterface[] = await getArticlesArray(reqParams);

      const reqComments = resArticle[0].kids;
      await this.fetchComments(reqComments, true);

      runInAction(() => {
        this.articleData = resArticle[0];
        this.isCommentsLoading = false;
      });
    } catch {
      this.isCommentsLoading = false;
    }
  };

  fetchComments = async (ids: number[], isLoading = false) => {
    try {
      this.isCommentsLoading = true;
      const resComments: CommentInterface[] = await getArticlesArray(ids);

      runInAction(() => {
        this.commentsData = resComments;
        this.isCommentsLoading = isLoading;
      });
    } catch {
      this.isCommentsLoading = false;
    }
  };
}

const commentsStore = new CommentsStore();
export { commentsStore };
