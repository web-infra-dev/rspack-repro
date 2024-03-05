import { defineConfig } from '@rsbuild/core'
import { webpackProvider } from '@rsbuild/webpack'
import { pluginSwc } from '@rsbuild/plugin-swc'

export default defineConfig({
  provider: webpackProvider,
  plugins: [pluginSwc()],
  output: {
    distPath: {
      root: './rsbuild-dist',
    },
  },
})
