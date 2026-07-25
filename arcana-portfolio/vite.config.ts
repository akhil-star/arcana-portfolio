import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// base: "./" makes the production build deployable from any path
// (Netlify, Vercel, GitHub Pages sub-path, plain static hosting).
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    rollupOptions: {
      output: {
        // three.js is only needed for the ambient background — keep it in
        // its own chunk so the core app JS stays small.
        manualChunks: { three: ['three'] },
      },
    },
  },
});
