import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: 'https://shadanda-rovaa.vercel.app/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  }
})
