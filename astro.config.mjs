// @ts-check
import { defineConfig } from "astro/config";
import sugarcube from "@sugarcube-sh/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321", // Replace with your actual domain
  vite: {
    plugins: [sugarcube()],
  },
});
