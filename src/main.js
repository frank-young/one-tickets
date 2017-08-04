import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import filter from './filter'
import 'iview/dist/styles/iview.css'
import iView from 'iview'

Vue.config.productionTip = false
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      name: ''
    }
  },
  router,
  store,
  filter,
  template: '<App/>',
  components: { App }
})
