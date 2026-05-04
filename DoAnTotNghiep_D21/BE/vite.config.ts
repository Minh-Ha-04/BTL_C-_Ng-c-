import { defineConfig } from 'vitest/config';
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

    bail: 0, // không dừng khi fail

    coverage: {
      provider: 'v8',

      // 👉 hiện terminal + html
      reporter: ['text', 'html'],

      include: [
        'src/services/**/*.ts',
      ],

      exclude: [
        'node_modules/',
        'src/test/**/*.ts',
        'src/services/googleAuthService.ts'
      ],

      reportsDirectory: './coverage',
      skipFull: false,
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