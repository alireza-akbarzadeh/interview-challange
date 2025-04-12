import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Enable Node.js compatibility mode to fix crypto issues
    environmentOptions: {
      // This enables the Node.js crypto module polyfill
      jsdom: {
        // Configure jsdom to use Node.js crypto module
        resources: 'usable',
      },
    },
    // Use Node.js environment for tests
    environment: 'node',
  },
});
