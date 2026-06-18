// @ts-check
import { defineConfig } from "astro/config";
import sugarcube from "@sugarcube-sh/vite";
import { imageService } from "@unpic/astro/service";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321", // Replace with your actual domain
  vite: {
    plugins: [sugarcube()],
  },
  image: {
    domains: ["cdn.sanity.io"],
    layout: "constrained",
    service: imageService({
      // This can usually be auto-detected
      // fallbackService: "sanity",
      placeholder: "blurhash",
      // This is the default
      layout: "constrained",
    }),
  },
});
