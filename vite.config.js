import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/dictle/" // Ensure this is set correctly for GitHub Pages
});
