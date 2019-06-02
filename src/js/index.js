
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
