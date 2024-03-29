import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["../reusable-ui/Logo", "../reusable-ui/Button", "../reusable-ui/TextInput"],
    },
  },
});
