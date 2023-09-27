/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@mocks": resolve(__dirname, "./src/mocks"),
      "@components": resolve(__dirname, "./src/components"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@request": resolve(__dirname, "./src/utils/request"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@pages": resolve(__dirname, "./src/pages"),
    },
  },
  css: {
    modules: {
      scopeBehaviour: "local",
      localsConvention: "camelCase",
      globalModulePaths: [/src\/index.css/i]
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["dotenv/config", "src/setupTest.ts"]
  },
})

