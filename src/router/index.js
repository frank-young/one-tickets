import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import Auth from '@/libs/auth'
import Util from '@/libs/util'
import Dashbord from '@/components/dashbord/Index'
import System from '@/components/system/Index'
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'
import Forget from '@/components/auth/Forget'
import SetPassword from '@/components/auth/SetPassword'

Vue.use(Router)
Vue.use(iView)

const router = new Router({
  routes: [
    /* 用户操作 */
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {guest: true}
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {guest: true}
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget,
      meta: {guest: true}
    },
    {
      path: '/setpassword',
      name: 'SetPassword',
      component: SetPassword,
      meta: {guest: true}
    },
    {
      path: '/main',
      name: 'Dashbord',
      component: Dashbord,
      meta: {auth: true}
    },
    {
      path: '/system',
      name: 'System',
      component: System,
      meta: {auth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (to.matched.some(record => record.meta.auth)) {
    if (!Auth.isLogin()) {
      router.push({name: 'Login'})
    }
  }

  if (to.matched.some(record => record.meta.guest)) {
    if (Auth.isLogin()) {
      router.push({name: 'Dashbord'})
    }
  }
  Util.title(to.meta.title)
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
