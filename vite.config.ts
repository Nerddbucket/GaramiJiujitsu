import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages - update this to match your repository name
  // If repo is "GaramiJiujitsu", use "/GaramiJiujitsu/"
  // If using custom domain or root, use "/"
  base: process.env.NODE_ENV === 'production' ? '/GaramiJiujitsu/' : '/',
})

