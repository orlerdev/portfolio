import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babelConfig from './babel.config';

export default defineConfig({
  plugins: [
    react()
  ],
  rollupInputOptions: {
    plugins: [
      {
        name: 'vite-plugin-babel',
        setup(build) {
          build.onLoad({ filter: /./ }, async (args) => {
            if (args.path.endsWith('.js')) {
              const { default: babel } = await import('@babel/core');
              const { code } = babel.transformSync(args.content, {
                ...babelConfig,
                filename: args.path,
              });
              return { code };
            }
          });
        }
      }
    ]
  }
});
