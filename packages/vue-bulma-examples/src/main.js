import Vue from 'vue'
import * as components from 'vue-bulma'
import App from './App'

for (const [key, value] of Object.entries(components)) {
  const name = value.name || `vb-${key.toLowerCase()}`
  Vue.component(name, value)
  console.log('Vue Bulma Component', name)
}

new Vue({
  render: h => h(App)
}).$mount('#app')
