import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "arwana-web-app",
      filename: "remoteEntry.js",
      remotes: {
        remote: {
          external: "/test-next-remote/_next/static/chunks/remoteEntry.js",
          from: "webpack",
          format: "var"
        },
        efi_remote: {
          external: "/growth-remote/_next/static/chunks/remoteEntry.js",
          from: "webpack",
          format: "var"
        }
      },
      exposes: {},
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    proxy: {
      "/test-next-remote": {
        target: "http://localhost:3001/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test-next-remote/, ""),
      },
      "/growth-remote": {
        target: "http://localhost:3002/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/growth-remote/, ""),
      },
    },
  },
});
