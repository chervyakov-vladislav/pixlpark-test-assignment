import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { NotFound } from './index';
import TestWrapper from '@/app/setupTests';
import { GlobalStore } from '@/app/store';

describe('NotFound Page', () => {
  it('NotFound render', () => {
    const stores = new GlobalStore();

    const { container } = render(
      <TestWrapper stores={stores}>
        <NotFound />
      </TestWrapper>
    );
    expect(container).toBeInTheDocument();
  });
});
