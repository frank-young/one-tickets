import Vue from 'vue'
import App from './App'
import router from './router'
import Util from './libs/util'
import store from './store'
import filter from './filter'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(filter)
Vue.use(iView)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  Util.title(to.meta.title)
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

Vue.config.productionTip = false

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
  template: '<App/>',
  components: { App }
})
