import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ... other config ...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
