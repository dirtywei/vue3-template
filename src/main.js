import { createApp } from 'vue'
import 'virtual:uno.css'
import App from './App.vue'
import { setupStore } from './stores'
import { setupRouter } from '@/router'

async function setupApp() {
  const app = createApp(App)
  setupStore(app) //pinia
  await setupRouter(app) // router
  app.mount('#app') // mount app
}
setupApp()
