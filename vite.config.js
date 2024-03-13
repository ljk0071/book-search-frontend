import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({  
  plugins: [
    vue(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        secure: false,
        // rewrite: path => path.replace(/^\/api/, ''),
      },
      "/oauth2.0" : {
        target : 'https://nid.naver.com/',
        changeOrigin : true,
        logLevel : 'debug'
      },
      "/v1" : {
        target : 'https://openapi.naver.com/',
        changeOrigin : true,
        logLevel : 'debug'
      },
      "/oauth2" : {
        target : 'https://oauth2.googleapis.com/',
        changeOrigin : true,
        logLevel : 'debug'
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  
})
