import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './src/main.jsx',
        // ...
      },
      output: {
        onwarn: (warning, warn) => {
          // Mengabaikan error saat membangun
          if (warning.code === 'CIRCULAR_DEPENDENCY') return;
          warn(warning);
        },
      },
    },
  },
});

import { defineConfig } from 'vite';
