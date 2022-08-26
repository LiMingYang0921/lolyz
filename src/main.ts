import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import '@/assets/style/reset.css'

const app = createApp(App)
app.use(lazyPlugin, {
  loading: require('@/assets/images/log.webp'), // 加载时默认图片
  error: require('@/assets/images/log.webp') // 图片失败时默认图片
}).use(store).use(router).mount('#app')
