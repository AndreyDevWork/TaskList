import { createApp } from 'vue'
import App from './App.vue'

import componentsUI from '@/components/UI'
import componentsAnimate from '@/components/Animations'

import directives from '@/directives'

import router from '@/router/router'

const app = createApp(App)
app.config.devtools = true;
componentsUI.forEach(item => {
  app.component(item.name, item)
});

componentsAnimate.forEach(item => {
  app.component(item.name, item)
});

directives.forEach(item => {
  app.directive(item.name, item)
})

app

  .use(router)
  .mount('#app')
