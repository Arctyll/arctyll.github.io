import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import metaMapPlugin from "vite-plugin-react-meta-map";

export default defineConfig(async () => {
  return {
    plugins: [
      react(),
      metaMapPlugin({
        pageMetaMapFilePath: "./client/src/lib/meta.ts",
        pageTemplateFilePath: "./client/src/PageTemplate.tsx",
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