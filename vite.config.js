import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/dog-app-react/',
  plugins: [react()]
}))
