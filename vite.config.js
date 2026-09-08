import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optional: Raise the warning threshold to 700kb so it stops complaining altogether
    chunkSizeWarningLimit: 700,
    rolldownOptions: {
      output: {
        codeSplitting: {
          minSize: 20000, // 20KB minimum to prevent tiny fragmented files
          groups: [
            {
              name: "charts-vendor",
              // Captures both Recharts and D3 dependencies
              test: /node_modules[\\/](recharts|d3)/,
              priority: 30,
            },
            {
              name: "react-core",
              // Captures core React framework code
              test: /node_modules[\\/](react|react-dom)/,
              priority: 20,
            },
            {
              name: "vendor",
              // Catches any remaining third-party dependencies
              test: /node_modules/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
