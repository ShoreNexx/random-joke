import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

  ],
  server: {
    host: '0.0.0.0',   // Allow connections from any IP (your mobile)
    port: 5173,        // You can change this if needed
  },
  
})
