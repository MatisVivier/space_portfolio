// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-matis/', // ⚠️ mets ici le nom de ton repo GitHub
})
