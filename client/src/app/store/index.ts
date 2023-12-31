import React from 'react';
import { articleStore, newsStore, commentsStore } from '@/widgets';

export class GlobalStore {
  news = newsStore;
  articlePage = articleStore;
  comments = commentsStore;
}

export const GlobalStoreContext = React.createContext<GlobalStore | null>(null);

export const useStores = () => {
  const context = React.useContext(GlobalStoreContext);

  if (context === null) {
    throw new Error('add provider for your app');
  }

  return context;
};

export type StoreType = ReturnType<typeof useStores>;
