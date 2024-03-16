import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [tailwind(), svelte()],
  vite: {
    build: {
      chunkSizeWarningLimit: 2048,
      // rollupOptions: {
      //   output: {
      //     manualChunks(id) {
      //       if (id.includes("phaser")) {
      //         return "phaser";
      //       }
      //     }
      //   }
      // },
    },
  },
});
