import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Check if the environment is production
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProduction ? '/dictle/' : '/'
});