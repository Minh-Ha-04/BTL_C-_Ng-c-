import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/server.ts',
      exportName: 'app',
      tsCompiler: 'esbuild',
    }),
  ],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/services/**/*.ts', 'src/controllers/**/*.ts'],
    },
    setupFiles: ['./src/test/setup.ts'],
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: 'src/server.ts',
      formats: ['es'],
      fileName: 'server',
    },
    rollupOptions: {
      external: [
        'express',
        'sequelize',
        'mysql2',
        'dotenv',
        'cors',
        'bcryptjs',
        'jsonwebtoken',
        'express-validator',
        'morgan',
        'helmet',
        'compression',
        'multer',
      ],
    },
  },
  optimizeDeps: {
    exclude: ['sequelize'],
  },
});

