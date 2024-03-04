import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      imports: [
        {
          vue: [
            "ref",
            "watch",
            "computed",
            "reactive",
            "onMounted",
            "onUpdated",
            "defineProps",
            "defineEmits",
            "defineModel",
            "defineSlots",
            "withDefaults",
          ],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
