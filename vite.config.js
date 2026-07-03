import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        myapps: resolve(rootDir, 'myapps.html'),
        blogs: resolve(rootDir, 'blogs.html'),
        certifications: resolve(rootDir, 'certifications.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
})
