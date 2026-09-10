import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'resolve-main-fallback',
        enforce: 'pre',
        resolveId(source) {
          if (
            source === '/src/main.tsx' ||
            source === './src/main.tsx' ||
            source === 'src/main.tsx' ||
            source === '/main.tsx' ||
            source === './main.tsx'
          ) {
            const srcPath = path.resolve(__dirname, 'src/main.tsx');
            if (fs.existsSync(srcPath)) {
              return srcPath;
            }
            const rootPath = path.resolve(__dirname, 'main.tsx');
            if (fs.existsSync(rootPath)) {
              return rootPath;
            }
          }
          return null;
        },
      },
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
