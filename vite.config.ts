import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { visualizer } from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    [vue(), Unocss(), visualizer({
      open: true, //在默认用户代理中打开生成的文件
      gzipSize: true, // 收集 gzip 大小并将其显示
      brotliSize: true, // 收集 brotli 大小并将其显示
      filename: "stats.html", // 分析图生成的文件名
    }), AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        })
      ],
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver()],
    }),
    Icons({
      autoInstall: true,
    })
      ,],
  ],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/variable.scss";'
      }
    }
  }
})
