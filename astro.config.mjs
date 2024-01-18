import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  compressHTML: true,
  build: {
    assets: "assets",
    inlineStylesheets: "never",
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
