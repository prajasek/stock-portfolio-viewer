import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@routes':path.resolve(__dirname,"./src/routes"),
      '@components' : path.resolve(__dirname, './src/components')
    }
  },
  plugins: [react()],
})

