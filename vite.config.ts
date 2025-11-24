import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 相対パスに設定することで、リポジトリ名に関わらずGitHub Pagesで正しく表示されるようにします
  base: './', 
})