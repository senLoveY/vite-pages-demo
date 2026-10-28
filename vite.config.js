import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = имя репозитория, иначе на GitHub Pages не подхватятся ассеты
export default defineConfig({
  plugins: [react()],
  base: '/vite-pages-demo/',
})
