import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import React, { ReactElement } from 'react';

interface TestWrapperProps {
  children: React.ReactNode;
  history?: MemoryHistory;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stores: any; // тип хранилища
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
