/* eslint-disable import/no-extraneous-dependencies */
// https://vitejs.dev/config/

import { defineConfig } from 'vite';
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
  });
};
