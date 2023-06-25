import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import React, { ReactElement } from 'react';
import { GlobalStoreContext, StoreType } from './store';

interface TestWrapperProps {
  children: React.ReactNode;
  history?: MemoryHistory;
  stores: StoreType;
}

const TestWrapper = ({
  children,
  history = createMemoryHistory(),
  stores,
}: TestWrapperProps): ReactElement => {
  return (
    <GlobalStoreContext.Provider value={stores}>
      <Router history={history}>
        {React.isValidElement(children) ? React.cloneElement(children, { ...stores }) : children}
      </Router>
    </GlobalStoreContext.Provider>
  );
};

export default TestWrapper;

expect.extend(matchers);
