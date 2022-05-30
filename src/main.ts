import Vue from 'vue'
import App from './App.vue'

import VersionCompare from 'version-compare'

console.log(VersionCompare)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
