import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import for @ imports from @types/node
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // in order to resolve @ from the src | npm i -D @types/node
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
