import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'element-plus/dist/index.css';// element plus样式
import * as ElIcons from '@element-plus/icons-vue' //element plus图标
import router from './router'


const app = createApp(App)

for (const name in ElIcons) {
  app.component(name, ElIcons[name]);
}
app.use(router)
app.mount('#app')



