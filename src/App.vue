<template>
  <div id="app">
    <Layout v-if="isLogin">
      <router-view></router-view>
    </Layout>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Layout from '@/components/layout/Main'
import Auth from '@/libs/auth'

export default {
  name: 'app',
  components: {
    Layout
  },
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    this.isLoginCtrl()
    console.log(this.isLogin)
  },
  methods: {
    isLoginCtrl () {
      if (Auth.isLogin()) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
