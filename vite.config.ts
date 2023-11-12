import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
