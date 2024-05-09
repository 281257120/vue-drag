/*
 * @Description: daimai
 * @Author: Liu Yang
 * @Date: 2023-03-14 13:59:27
 * @LastEditTime: 2024-05-08 17:09:45
 * @LastEditors: Liu Yang
 * @FilePath: \vue3-master\vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import defineOptions from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: process.env.VITE_VUE_ROUTER_BASE,
    plugins: [vue(), defineOptions()],
    resolve: {
      alias: {
        '@src': resolve(__dirname, './src'),
        '@api': resolve(__dirname, './src/api'),
        '@assets': resolve(__dirname, './src/assets'),
        '@common': resolve(__dirname, './src/common'),
        '@components': resolve(__dirname, './src/components'),
        '@composables': resolve(__dirname, './src/composables'),
        '@config': resolve(__dirname, './src/config'),
        '@i18n': resolve(__dirname, './src/i18n'),
        '@layouts': resolve(__dirname, './src/layouts'),
        '@pages': resolve(__dirname, './src/pages'),
        '@router': resolve(__dirname, './src/router'),
        '@store': resolve(__dirname, './src/store'),
        '@types': resolve(__dirname, './src/types'),
        '@utils': resolve(__dirname, './src/utils')
      }
    },
    // css: {
    //Rem 布局适配：移动端使用（ui图设置390宽度）
    // postcss: {
    //   plugins: [
    //     postCssPxToRem({
    //       rootValue: 39,
    //       propList: ['*'],
    //     })
    //   ]
    // }
    // },
    server: {
      host: '0.0.0.0',
      https: false,
      port: 4000,
      proxy: {
        '/traffictile': {
          target: 'https://tm.amap.com/trafficengine/mapabc/traffictile',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/traffictile/, '/')
        },
        '/v3': {
          target: 'https://restapi.amap.com/v3',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/v3/, '/')
        },
        '/geoserver': {
          target: 'http://47.111.68.226:8080/geoserver',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/geoserver/, '/')
        }
      }
    },
    // define: {
    //   __APP_VERSION__: JSON.stringify(packageJson.version)
    // }
  })
}

