import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',  // Default Vite dev server port
    viewportWidth: 1280,
    viewportHeight: 720
  },
});