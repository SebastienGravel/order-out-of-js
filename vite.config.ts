import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://sebastiengravel.github.io/order-out-of-js/",
  plugins: [react()]
});

