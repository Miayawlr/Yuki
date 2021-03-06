import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fay from '../packages'
import '../packages/utils/styles/colors.css'

createApp(App).use(router).use(fay).mount('#app')
