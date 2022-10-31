import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, './src/css'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@page': path.resolve(__dirname, './src/pages/'),
      '@icons': path.resolve(__dirname, 'public/icons'),
      '@img': path.resolve(__dirname, 'public/img'),
      '@fonts': path.resolve(__dirname, 'public/fonts'),
    },
  },
  plugins: [
    vue(),
    // legacy({
    //   targets: ['IE >= 11'],
    //   additionalLegacyPolyfills: ['whatwg-fetch'],
    // }),
  ],
});
