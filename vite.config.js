import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external access
    allowedHosts: ['93a8-49-47-219-4.ngrok-free.app', 'localhost', '127.0.0.1'], // Allow ngrok URL
  }
})
