import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  root: path.resolve(__dirname, 'public'), // <<<< CORREÇÃO AQUI
});