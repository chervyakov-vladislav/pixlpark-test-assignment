import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import React, { ReactElement } from 'react';
import { StoreType } from './store';

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
    <Router history={history}>
      {React.isValidElement(children) ? React.cloneElement(children, { ...stores }) : children}
    </Router>
  );
};

export default TestWrapper;

expect.extend(matchers);
