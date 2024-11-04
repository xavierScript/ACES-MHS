import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  base: '/ACES-MHS/', 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        
      },
    },
  },
  plugins: [
    {
      name: 'copy-404',
      generateBundle() {
        
        copyFileSync('dist/index.html', 'dist/404.html');
      },
    },
  ],
});
