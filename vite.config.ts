import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site is served from /<repo-name>/
export default defineConfig({
  base: "/salramir-profile/",
  plugins: [react(), tailwindcss()],
});
