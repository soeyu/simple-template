import { defineConfig } from 'vite'
export default defineConfig({
  server: {
    proxy: {
      '^/(hrb-screen|harbin|web|communication)/': {
        target: 'https://www.harbin.gov.cn',
        changeOrigin: true,
      },
    },
  },
})
