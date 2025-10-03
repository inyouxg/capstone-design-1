import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,               // 외부 접속 허용
    allowedHosts: [
      'beamiest-semijocularly-aron.ngrok-free.dev'  // ngrok 주소 추가
    ]
  }
})
