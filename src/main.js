import 'vue-googlemaps/dist/vue-googlemaps.css'
import 'vue-material/dist/vue-material.css'
import 'vue-material-design-icons/styles.css'

import './plugins'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import LoadingOverlay from './components/LoadingOverlay.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.component('LoadingOverlay', LoadingOverlay)

Vue.material.registerTheme('default', {
  primary: 'red',
  accent: 'indigo',
  warn: 'deep-orange',
  background: 'white',
})

// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
