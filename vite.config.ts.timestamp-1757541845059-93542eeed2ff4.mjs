// vite.config.ts
import { defineConfig } from "file:///home/marcusgajozo/projects/jogo-ecobrasil-aventura/node_modules/vite/dist/node/index.js";
import react from "file:///home/marcusgajozo/projects/jogo-ecobrasil-aventura/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import tailwindcss from "file:///home/marcusgajozo/projects/jogo-ecobrasil-aventura/node_modules/@tailwindcss/vite/dist/index.mjs";
import { fileURLToPath } from "node:url";
import { storybookTest } from "file:///home/marcusgajozo/projects/jogo-ecobrasil-aventura/node_modules/@storybook/addon-vitest/dist/vitest-plugin/index.mjs";
var __vite_injected_original_dirname = "/home/marcusgajozo/projects/jogo-ecobrasil-aventura";
var __vite_injected_original_import_meta_url = "file:///home/marcusgajozo/projects/jogo-ecobrasil-aventura/vite.config.ts";
var dirname = typeof __vite_injected_original_dirname !== "undefined" ? __vite_injected_original_dirname : path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3e3,
    host: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@images": path.resolve(__vite_injected_original_dirname, "./src/assets/images"),
      "@models": path.resolve(__vite_injected_original_dirname, "./src/assets/models"),
      "@audios": path.resolve(__vite_injected_original_dirname, "./src/assets/audios"),
      "@lib": path.resolve(__vite_injected_original_dirname, "./src/lib"),
      "@jsons": path.resolve(__vite_injected_original_dirname, "./src/assets/jsons")
    }
  },
  assetsInclude: ["**/*.glb"],
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook")
          })
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium"
              }
            ]
          },
          setupFiles: [".storybook/vitest.setup.ts"]
        }
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tYXJjdXNnYWpvem8vcHJvamVjdHMvam9nby1lY29icmFzaWwtYXZlbnR1cmFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL21hcmN1c2dham96by9wcm9qZWN0cy9qb2dvLWVjb2JyYXNpbC1hdmVudHVyYS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9tYXJjdXNnYWpvem8vcHJvamVjdHMvam9nby1lY29icmFzaWwtYXZlbnR1cmEvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdC9jb25maWdcIiAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgeyBzdG9yeWJvb2tUZXN0IH0gZnJvbSBcIkBzdG9yeWJvb2svYWRkb24tdml0ZXN0L3ZpdGVzdC1wbHVnaW5cIjtcbmNvbnN0IGRpcm5hbWUgPVxuICB0eXBlb2YgX19kaXJuYW1lICE9PSBcInVuZGVmaW5lZFwiXG4gICAgPyBfX2Rpcm5hbWVcbiAgICA6IHBhdGguZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgdGFpbHdpbmRjc3MoKV0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgaG9zdDogdHJ1ZSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgIFwiQGltYWdlc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2Fzc2V0cy9pbWFnZXNcIiksXG4gICAgICBcIkBtb2RlbHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9hc3NldHMvbW9kZWxzXCIpLFxuICAgICAgXCJAYXVkaW9zXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXNzZXRzL2F1ZGlvc1wiKSxcbiAgICAgIFwiQGxpYlwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2xpYlwiKSxcbiAgICAgIFwiQGpzb25zXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXNzZXRzL2pzb25zXCIpLFxuICAgIH0sXG4gIH0sXG4gIGFzc2V0c0luY2x1ZGU6IFtcIioqLyouZ2xiXCJdLFxuICB0ZXN0OiB7XG4gICAgcHJvamVjdHM6IFtcbiAgICAgIHtcbiAgICAgICAgZXh0ZW5kczogdHJ1ZSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIHN0b3J5Ym9va1Rlc3Qoe1xuICAgICAgICAgICAgY29uZmlnRGlyOiBwYXRoLmpvaW4oZGlybmFtZSwgXCIuc3Rvcnlib29rXCIpLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICB0ZXN0OiB7XG4gICAgICAgICAgbmFtZTogXCJzdG9yeWJvb2tcIixcbiAgICAgICAgICBicm93c2VyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgaGVhZGxlc3M6IHRydWUsXG4gICAgICAgICAgICBwcm92aWRlcjogXCJwbGF5d3JpZ2h0XCIsXG4gICAgICAgICAgICBpbnN0YW5jZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyb3dzZXI6IFwiY2hyb21pdW1cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXR1cEZpbGVzOiBbXCIuc3Rvcnlib29rL3ZpdGVzdC5zZXR1cC50c1wiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxpQkFBaUI7QUFHeEIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxxQkFBcUI7QUFSOUIsSUFBTSxtQ0FBbUM7QUFBcUssSUFBTSwyQ0FBMkM7QUFTL1AsSUFBTSxVQUNKLE9BQU8scUNBQWMsY0FDakIsbUNBQ0EsS0FBSyxRQUFRLGNBQWMsd0NBQWUsQ0FBQztBQUVqRCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztBQUFBLEVBQ2hDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDcEMsV0FBVyxLQUFLLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDeEQsV0FBVyxLQUFLLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDeEQsV0FBVyxLQUFLLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDeEQsUUFBUSxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzNDLFVBQVUsS0FBSyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLElBQ3hEO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBZSxDQUFDLFVBQVU7QUFBQSxFQUMxQixNQUFNO0FBQUEsSUFDSixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsY0FBYztBQUFBLFlBQ1osV0FBVyxLQUFLLEtBQUssU0FBUyxZQUFZO0FBQUEsVUFDNUMsQ0FBQztBQUFBLFFBQ0g7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNKLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxZQUNQLFNBQVM7QUFBQSxZQUNULFVBQVU7QUFBQSxZQUNWLFVBQVU7QUFBQSxZQUNWLFdBQVc7QUFBQSxjQUNUO0FBQUEsZ0JBQ0UsU0FBUztBQUFBLGNBQ1g7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsWUFBWSxDQUFDLDRCQUE0QjtBQUFBLFFBQzNDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
