import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('Example', () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
