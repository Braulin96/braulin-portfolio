import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/braulin-portfolio/',
  resolve: { 
    alias: {
      'components': resolve(__dirname, './src/components'),
      'constants': resolve(__dirname, './src/constants'),
      'hooks': resolve(__dirname, './src/hooks'),
      'utils': resolve(__dirname, './src/utils'),
      'assets': resolve(__dirname, './src/assets'),
      'types': resolve(__dirname, './src/types'),
      'styles': resolve(__dirname, './src/styles'),
      'pages': resolve(__dirname, './src/pages'),
    }
  }
})
