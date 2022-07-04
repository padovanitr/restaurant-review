import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    esbuild: {
      exclude: ['src/**/*.test.*'],
    },
    plugins: [react(), svgr(), tsconfigPaths()],
  }

  return config
})
