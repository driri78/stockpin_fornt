import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ViteSvgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ViteSvgr()],
});
