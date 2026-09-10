import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function flatRepoFallbackPlugin() {
  return {
    name: 'flat-repo-fallback',
    enforce: 'pre' as const,
    resolveId(source: string, importer?: string) {
      if (!importer || importer.includes('node_modules')) return null;

      // Handle ../types or ./types
      if (source.endsWith('/types') || source === '../types' || source === './types') {
        for (const candidate of [
          path.resolve(__dirname, 'types.ts'),
          path.resolve(__dirname, 'src/types.ts'),
        ]) {
          if (fs.existsSync(candidate)) return candidate;
        }
      }

      // Handle mockData
      if (source.includes('mockData')) {
        for (const candidate of [
          path.resolve(__dirname, 'mockData.ts'),
          path.resolve(__dirname, 'data/mockData.ts'),
          path.resolve(__dirname, 'src/data/mockData.ts'),
          path.resolve(__dirname, 'src/mockData.ts'),
        ]) {
          if (fs.existsSync(candidate)) return candidate;
        }
      }

      // Handle components/XYZ
      if (source.includes('components/')) {
        const componentName = source.split('components/').pop();
        if (componentName) {
          for (const ext of ['.tsx', '.ts', '']) {
            for (const candidate of [
              path.resolve(__dirname, componentName + ext),
              path.resolve(__dirname, 'components', componentName + ext),
              path.resolve(__dirname, 'src/components', componentName + ext),
            ]) {
              if (fs.existsSync(candidate)) return candidate;
            }
          }
        }
      }

      return null;
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [flatRepoFallbackPlugin(), react(), tailwindcss()],
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
