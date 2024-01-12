import { defineConfig } from 'vite'
export default defineConfig({
  server: {
    proxy: {
      '^/(x|y|z)/': {
        target: 'https://www.xyz.com',
        changeOrigin: true,
      },
    },
  },
})
