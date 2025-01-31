import { defineConfig } from 'vite';
import { angular } from './vite-plugin-angular';

export default defineConfig({
  plugins: [
    angular()
  ],
  server: {
    port: 4200 // Specify your preferred port
  },
  build: {
    outDir: 'dist', // Output directory for build
    sourcemap: true, // Enable source maps for debugging
  },
});