import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [react()],
  base: '/Aleks4920.github.io/',  // your repo name
  build: { outDir: 'dist' },
})
