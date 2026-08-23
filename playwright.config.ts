import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'python3 -m http.server 4173 --directory out',
    port: 4173,
    reuseExistingServer: !process.env.CI,
    timeout: 15000,
  },
  use: {
    baseURL: 'http://localhost:4173',
  },
});
