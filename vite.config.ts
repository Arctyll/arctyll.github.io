import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Pages from "vite-plugin-pages";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  return {
    plugins: [
      react(),
      Pages({
        extensions: ['tsx'],
        dirs: 'client/src/pages',
        extendRoute(route) {
          if (route.path === '/not-found') {
            return {
              ...route,
              path: '/:pathMatch(.*)*',
            };
          }
          return route;
        },
      }),
      runtimeErrorOverlay(),
      ...(process.env.NODE_ENV !== "production" &&
        process.env.REPL_ID !== undefined ?
        [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer()
          ),
        ] :
        []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});