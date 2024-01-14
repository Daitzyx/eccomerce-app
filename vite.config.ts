/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';

type ViteConfig = UserConfig & { test: InlineConfig };
const config: ViteConfig = {
  plugins: [react()],
  server: {
    host: true
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
};
// https://vitejs.dev/config/
export default defineConfig(config);
