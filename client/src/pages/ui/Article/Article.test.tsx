import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Article } from './index';
import TestWrapper from '@/app/setupTests';
import { GlobalStore } from '@/app/store';

describe('Article Page', () => {
  it('Article render', () => {
    const stores = new GlobalStore();

    const { container } = render(
      <TestWrapper stores={stores}>
        <Article />
      </TestWrapper>
    );
    expect(container).toBeInTheDocument();
  });
});
