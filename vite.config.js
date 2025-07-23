import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 esto permite conexiones externas (0.0.0.0)
    port: 5173, // opcional, puedes cambiarlo si ese puerto está ocupado
  }
})
