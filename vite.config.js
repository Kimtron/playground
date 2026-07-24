import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      input: 'src/index.js',
      output: {
        format: 'iife',
        name: 'BonBon',
        entryFileNames: 'bundle-[hash].js',
        chunkFileNames: 'chunk-[hash].js',
        assetFileNames: 'asset-[hash][extname]'
      }
    }
  },
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 4173
  }
});
