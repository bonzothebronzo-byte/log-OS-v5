import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // CRITICAL: This makes sure GitHub Pages can find your files
  base: '/log-OS-v5/', 
  
  define: {
    // CRITICAL: This stops the "process is not defined" crash
    'process.env': {},
    // CRITICAL: This stops the PeerJS/Multiplayer crash
    'global': 'window',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // This ignores the "chunk size" warnings that look scary
    chunkSizeWarningLimit: 1600,
    // This tells the builder to be less strict about mixed imports
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
