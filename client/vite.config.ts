/// <reference types="vitest" />
/// <reference types="vite/client" />

import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/app/setupTests.tsx'],
    include: ['./src/**/*.test.{js,ts,tsx,jsx}'],
    coverage: {
      all: true,
      enabled: true,
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
      exclude: [...configDefaults.exclude, '**/*.test.{js,ts,tsx}', '**/main.tsx'],
    },
  },
  build: { sourcemap: true },
});
