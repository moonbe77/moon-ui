import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      rollupTypes: true,
      // insertTypesEntry: true,
      // outDir: "dist/types",
      tsconfigPath: "./tsconfig.app.json",
      // staticImport: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "moon-ui",
      fileName: (format) => {
        if (format === "es") {
          return `moon-ui.js`;
        }
        return `moon-ui.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
    modules: {
      scopeBehaviour: "global", // Optional: Keep CSS global if not using CSS Modules
    },
  },
});
