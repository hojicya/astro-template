import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [vue()],
  // site: "",
  // base: "/",
  // trailingSlash: "always",
  compressHTML: false,
  build: {
    assets: "assets",
    inlineStylesheets: "never",
    format: "directory",
  },
  vite: {
    build: {
      minify: true,
      rollupOptions: {
        output: {
          entryFileNames: "assets/js/[name].js",
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
              return "assets/images/[name].[ext]";
            }
            if (/\.css$/.test(name ?? "")) {
              return "assets/css/[name].[ext]";
            }
            return "assets/[name].[ext]";
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "src/styles/base/_variables.scss" as *;
            @use "src/styles/base/_mixin.scss" as *;
            `,
        },
      },
    },
  },
});
