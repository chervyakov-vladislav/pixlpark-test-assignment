import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';
import TestWrapper from '@/app/setupTests';
import { GlobalStore } from '@/app/store';

describe('App', () => {
  it('App render', () => {
    const stores = new GlobalStore();

    const { container } = render(
      <TestWrapper stores={stores}>
        <App />
      </TestWrapper>
    );
    expect(container).toBeInTheDocument();
  });
});
