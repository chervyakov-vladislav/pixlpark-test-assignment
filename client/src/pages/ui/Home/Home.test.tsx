import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Home } from './index';
import TestWrapper from '@/app/setupTests';
import { GlobalStore } from '@/app/store';

describe('Home Page', () => {
  it('Home render', () => {
    const stores = new GlobalStore();

    const { container } = render(
      <TestWrapper stores={stores}>
        <Home />
      </TestWrapper>
    );
    expect(container).toBeInTheDocument();
  });
});
