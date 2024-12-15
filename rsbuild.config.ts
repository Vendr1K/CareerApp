import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Career App'
  },
  resolve: {
    alias: {
      '@/components': './src/components',
      '@/constans': './src/constans',
      '@/hooks': './src/hooks',
      '@/models': './src/models',
      '@/props': './src/props',
      '@/store': './src/store',
      '@/utils': './src/utils',
      '@/types': './src/types',
      '@/pages': './src/pages',
      '@/services': './src/services'
    }
  }
})
