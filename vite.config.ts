import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import {resolve} from 'path'

const projectRoot = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
          '@': resolve(projectRoot, './src')
    }
  },
  build: {
    outDir: 'dist',
  }

})
