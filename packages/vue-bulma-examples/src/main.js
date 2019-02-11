import Vue from 'vue'
import App from './App'
import router from './router'
import Demo from './components/DemoContainer'
import SectionItem from './components/SectionItem'
import * as components from 'vue-bulma'
import 'bulma/css/bulma.css'

Vue.component('demo', Demo)
Vue.component('example-section-item', SectionItem)

for (const [key, value] of Object.entries(components)) {
  const name = value.name || `vb-${key.toLowerCase()}`
  Vue.component(name, value)
  console.log('Vue Bulma Component', name)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
