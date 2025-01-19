import { rmSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron/simple";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  rmSync("out/far", { recursive: true, force: true });

  const isServe = command === "serve";
  const isBuild = command === "build";
  const sourcemap = isServe || !!process.env.VSCODE_DEBUG;
  // console.log(path.join(__dirname, "src/far/main/index.ts"));

  return {
    root: path.join(__dirname, "src/renderer"),
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/renderer/src"),
        "@common": path.join(__dirname, "src/renderer/src/common"),
      },
    },
    plugins: [
      react(),
      electron({
        main: {
          entry: path.join(__dirname, "src/far/main/index.ts"),
          onstart(args) {
            if (process.env.VSCODE_DEBUG) {
              console.log(33);
              console.log(
                /* For `.vscode/.debug.script.mjs` */ "[startup] Electron App"
              );
            } else {
              args.startup();
            }
          },
          vite: {
            root: path.join(__dirname, "."),
            build: {
              sourcemap,
              minify: isBuild,
              outDir: "out/far/main",
              rollupOptions: {
                external: Object.keys(
                  "dependencies" in pkg ? pkg.dependencies : {}
                ),
              },
            },
          },
        },
        preload: {
          input: "src/far/preload/index.ts",
          vite: {
            root: path.join(__dirname, "."),
            build: {
              sourcemap: sourcemap ? "inline" : undefined, // #332
              minify: isBuild,
              outDir: "out/far/preload",
              rollupOptions: {
                external: Object.keys(
                  "dependencies" in pkg ? pkg.dependencies : {}
                ),
              },
            },
          },
        },
        renderer: {},
      }),
    ],
    build: {
      outDir: path.join(__dirname, "out/renderer"),
    },
    server:
      process.env.VSCODE_DEBUG &&
      (() => {
        const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
        return {
          host: url.hostname,
          port: +url.port,
        };
      })(),
    clearScreen: false,
  };
});
