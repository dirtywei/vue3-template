import { createPinia } from 'pinia'

export * from './modules'

export function setupStore(app) {
  app.use(createPinia())
}
