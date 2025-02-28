import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, "./src/components"),
      '@modules': path.resolve(__dirname, "./src/modules"),
      '@icons': path.resolve(__dirname, './src/assets'),
      '@loader': path.resolve(__dirname, './src/components/Loader'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@context': path.resolve(__dirname, './src/context'),
    }
  }
})