import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // path names relative to outDir
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/chunks/[name].js',
        assetFileNames: 'static/[name][extname]',
      },
    },
    watch: {
      // this turns on auto build after npm run build
    }
  }
})
