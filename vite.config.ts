import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import  Components  from 'unplugin-vue-components/vite'
import {VantResolver} from '@vant/auto-import-resolver'
import {viteMockServe} from 'vite-plugin-mock'
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers:[VantResolver()],
    }),
    viteMockServe({
      mockPath:'mock',
      enable:true,
}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
   proxy:{
    '/api':{
      target:"https://8080-firebase-rssread-1772542498410.cluster-y75up3teuvc62qmnwys4deqv6y.cloudworkstations.dev/",
      changeOrigin:true,
      rewrite:(path)=>path.replace(/^\/api/,"")
    }
   }
  },
})
