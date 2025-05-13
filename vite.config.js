import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: false,     // Отключаем папку public, чтобы Vite не искал шаблоны там
  root: '.',            // Корень проекта
  build: {
    outDir: 'dist'
  }
})
