import React from 'react';

export class GlobalStore {}

export const GlobalStoreContext = React.createContext<GlobalStore | null>(null);

export const useStores = () => {
  const context = React.useContext(GlobalStoreContext);

  if (context === null) {
    throw new Error('add provider for your app');
  }

  return context;
};
