import { createApp } from 'vue'
import App from './App.vue'

import componentsUI from '@/components/UI'
import directives from '@/directives'

import router from '@/router/router'

const app = createApp(App)

componentsUI.forEach(item => {
  app.component(item.name, item)
});

directives.forEach(item => {
  app.directive(item.name, item)
})

app
  .use(router)
  .mount('#app')
