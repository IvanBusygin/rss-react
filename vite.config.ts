/* eslint-disable import/no-extraneous-dependencies */
// https://vitejs.dev/config/

/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

import react from '@vitejs/plugin-react';
import vitePluginEslint from 'vite-plugin-eslint';

type IVite = { mode: string; command: string };

export default ({ mode }: IVite) => {
  const isDev = mode === 'development';

  return defineConfig({
    plugins: [react(), vitePluginEslint()],
    css: {
      devSourcemap: isDev,
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: isDev ? '[name]_[local]_[hash:base64:2]' : '[hash:base64:5]',
      },
    },
    test: {
      css: true,
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/_tests/setup.ts'],
      coverage: {
        exclude: [...(configDefaults.coverage.exclude || []), 'src/main.tsx', 'src/HOC/*.tsx'],
        all: true,
        src: ['src'],
        provider: 'c8',
        reporter: ['text'],
      },
    },
  });
};
