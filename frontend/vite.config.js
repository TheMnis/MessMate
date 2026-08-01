import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const target = process.env.VITE_API_PROXY_TARGET || 'http://localhost:5000';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
<<<<<<< HEAD
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
=======
})
>>>>>>> 74ec9b4 (refactor: implement centralized theme system)
