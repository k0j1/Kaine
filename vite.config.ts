import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // 開発サーバー起動時は '/' で200 OKを返却し、本番ビルド（GitHub Pages）時のみリポジトリ名ベースパス '/Kaine/' を使用
  base: command === 'build' ? '/Kaine/' : '/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
}))