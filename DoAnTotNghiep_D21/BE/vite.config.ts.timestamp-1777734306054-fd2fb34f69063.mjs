// vite.config.ts
import { defineConfig } from "file:///D:/H%E1%BB%87%20th%E1%BB%91ng%20Website%20b%C3%A1n%20tour%20du%20l%E1%BB%8Bch/DoAnTotNghiep_D21-main/DoAnTotNghiep_D21/BE/node_modules/vitest/dist/config.js";
import { VitePluginNode } from "file:///D:/H%E1%BB%87%20th%E1%BB%91ng%20Website%20b%C3%A1n%20tour%20du%20l%E1%BB%8Bch/DoAnTotNghiep_D21-main/DoAnTotNghiep_D21/BE/node_modules/vite-plugin-node/dist/index.js";
var vite_config_default = defineConfig({
  server: {
    port: 5e3
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "./src/server.ts",
      exportName: "app",
      tsCompiler: "esbuild"
    })
  ],
  test: {
    globals: true,
    environment: "node",
    bail: 0,
    // không dừng khi fail
    coverage: {
      provider: "v8",
      // 👉 hiện terminal + html
      reporter: ["text", "html"],
      include: [
        "src/services/**/*.ts"
      ],
      exclude: [
        "node_modules/",
        "src/test/**/*.ts",
        "src/services/googleAuthService.ts"
      ],
      reportsDirectory: "./coverage",
      skipFull: false
    },
    setupFiles: ["./src/test/setup.ts"]
  },
  build: {
    target: "esnext",
    outDir: "dist",
    lib: {
      entry: "src/server.ts",
      formats: ["es"],
      fileName: "server"
    },
    rollupOptions: {
      external: [
        "express",
        "sequelize",
        "mysql2",
        "dotenv",
        "cors",
        "bcryptjs",
        "jsonwebtoken",
        "express-validator",
        "morgan",
        "helmet",
        "compression",
        "multer"
      ]
    }
  },
  optimizeDeps: {
    exclude: ["sequelize"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxIXHUxRUM3IHRoXHUxRUQxbmcgV2Vic2l0ZSBiXHUwMEUxbiB0b3VyIGR1IGxcdTFFQ0JjaFxcXFxEb0FuVG90TmdoaWVwX0QyMS1tYWluXFxcXERvQW5Ub3ROZ2hpZXBfRDIxXFxcXEJFXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxIXHUxRUM3IHRoXHUxRUQxbmcgV2Vic2l0ZSBiXHUwMEUxbiB0b3VyIGR1IGxcdTFFQ0JjaFxcXFxEb0FuVG90TmdoaWVwX0QyMS1tYWluXFxcXERvQW5Ub3ROZ2hpZXBfRDIxXFxcXEJFXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9IJUUxJUJCJTg3JTIwdGglRTElQkIlOTFuZyUyMFdlYnNpdGUlMjBiJUMzJUExbiUyMHRvdXIlMjBkdSUyMGwlRTElQkIlOEJjaC9Eb0FuVG90TmdoaWVwX0QyMS1tYWluL0RvQW5Ub3ROZ2hpZXBfRDIxL0JFL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5pbXBvcnQgeyBWaXRlUGx1Z2luTm9kZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW5vZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA1MDAwLFxuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICAuLi5WaXRlUGx1Z2luTm9kZSh7XG4gICAgICBhZGFwdGVyOiAnZXhwcmVzcycsXG4gICAgICBhcHBQYXRoOiAnLi9zcmMvc2VydmVyLnRzJyxcbiAgICAgIGV4cG9ydE5hbWU6ICdhcHAnLFxuICAgICAgdHNDb21waWxlcjogJ2VzYnVpbGQnLFxuICAgIH0pLFxuICBdLFxuXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnbm9kZScsXG5cbiAgICBiYWlsOiAwLCAvLyBraFx1MDBGNG5nIGRcdTFFRUJuZyBraGkgZmFpbFxuXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHByb3ZpZGVyOiAndjgnLFxuXG4gICAgICAvLyBcdUQ4M0RcdURDNDkgaGlcdTFFQzduIHRlcm1pbmFsICsgaHRtbFxuICAgICAgcmVwb3J0ZXI6IFsndGV4dCcsICdodG1sJ10sXG5cbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgJ3NyYy9zZXJ2aWNlcy8qKi8qLnRzJyxcbiAgICAgIF0sXG5cbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ25vZGVfbW9kdWxlcy8nLFxuICAgICAgICAnc3JjL3Rlc3QvKiovKi50cycsXG4gICAgICAgICdzcmMvc2VydmljZXMvZ29vZ2xlQXV0aFNlcnZpY2UudHMnXG4gICAgICBdLFxuXG4gICAgICByZXBvcnRzRGlyZWN0b3J5OiAnLi9jb3ZlcmFnZScsXG4gICAgICBza2lwRnVsbDogZmFsc2UsXG4gICAgfSxcblxuICAgIHNldHVwRmlsZXM6IFsnLi9zcmMvdGVzdC9zZXR1cC50cyddLFxuICB9LFxuXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiAnc3JjL3NlcnZlci50cycsXG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sXG4gICAgICBmaWxlTmFtZTogJ3NlcnZlcicsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAnZXhwcmVzcycsXG4gICAgICAgICdzZXF1ZWxpemUnLFxuICAgICAgICAnbXlzcWwyJyxcbiAgICAgICAgJ2RvdGVudicsXG4gICAgICAgICdjb3JzJyxcbiAgICAgICAgJ2JjcnlwdGpzJyxcbiAgICAgICAgJ2pzb253ZWJ0b2tlbicsXG4gICAgICAgICdleHByZXNzLXZhbGlkYXRvcicsXG4gICAgICAgICdtb3JnYW4nLFxuICAgICAgICAnaGVsbWV0JyxcbiAgICAgICAgJ2NvbXByZXNzaW9uJyxcbiAgICAgICAgJ211bHRlcicsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5cbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydzZXF1ZWxpemUnXSxcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBcWQsU0FBUyxvQkFBb0I7QUFDbGYsU0FBUyxzQkFBc0I7QUFFL0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLEdBQUcsZUFBZTtBQUFBLE1BQ2hCLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFFYixNQUFNO0FBQUE7QUFBQSxJQUVOLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQTtBQUFBLE1BR1YsVUFBVSxDQUFDLFFBQVEsTUFBTTtBQUFBLE1BRXpCLFNBQVM7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLE1BRUEsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUVBLGtCQUFrQjtBQUFBLE1BQ2xCLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFFQSxZQUFZLENBQUMscUJBQXFCO0FBQUEsRUFDcEM7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFdBQVc7QUFBQSxFQUN2QjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
