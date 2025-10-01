import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

// PROXY FOR REACT APPLICATION THAT IS CREATED USING VITE BUNDLER TOOL.

  server: {
    proxy: {
      '/api': {
        target: `${process.env.BASE_URL}`, // your backend server
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // optional: removes "/api" from the request
      }
    }
  }
})
