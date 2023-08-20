import { createApp } from 'vue'
import 'virtual:uno.css'
import App from './App.vue'
import { setupStore } from './stores'
import router from './router'

async function setupApp() {
  const app = createApp(App)
  setupStore(app) //pinia
  app.use(router) //router
  app.mount('#app') // mount app
}
setupApp()
